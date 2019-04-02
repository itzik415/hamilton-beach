require('dotenv').config();
import React from "react"
import { rootReducer } from '../shered/app/Redux/reducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk"
import express from "express"
import cors from "cors"
import { Provider } from 'react-redux'

import { renderToString } from "react-dom/server"
import serialize from "serialize-javascript"
import { matchPath, StaticRouter } from 'react-router-dom'
import Main from '../shered/app/main'
import routes from '../shered/app/routes'

const JWT_WEB_SERIAL = process.env.JWT_WEB_SERIAL;
const PAYPAL_ID = process.env.PAYPAL_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;

const knex = require('knex');
const jwt = require('jsonwebtoken');
const paypal = require('paypal-rest-sdk');
const uuidv1 = require('uuid/v1');

const contactEmail = require('./sendingEmail/contactEmail');
const registrationEmail = require('./sendingEmail/registrationEmail');
const confirmPaymentToOfficeEmail = require('./sendingEmail/confirmPaymentToOfficeEmail');

const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public')) // make everything in the public folder available for us
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const db = knex({
    client: 'pg',
    connection: {
        connectionString: DATABASE_URL,
        ssl: true,
    }
});

paypal.configure({
    'mode': 'live', //sandbox or live
    'client_id': PAYPAL_ID,
    'client_secret': PAYPAL_CLIENT_SECRET
})



app.post('/api/pay', (req,res) => {
    var allProducts = [];
    db('carts').where({email: req.body.user}).select('category', 'model', 'price', 'amount', 'serial')
        .then(item => {
            for(let i = 0; i < item.length; i++){
                let product = {
                    "name": item[i].category,
                    "sku": item[i].model +' '+ item[i].serial,
                    "price": item[i].price,
                    "currency": "ILS",
                    "quantity": item[i].amount
                }
                allProducts.push(product)
            }
            allProducts.push({
                "name": "משלוח",
                "sku": "delivery 0",
                "price": "70.00",
                "currency": "ILS",
                "quantity": 1
            })
            let orderId = uuidv1();
            db('orders').insert({
                order_id: orderId,
                signin_email: req.body.user,
                user_email: req.body.email,
                user_name: req.body.name,
                total_sum: allProducts.map(item => item.price * item.quantity).reduce((a,b) => a+b, 0) })
                .then(item => {item})

            let returnUrl = req.body.url + '/process-payment'
            let cancelUrl = req.body.url + '/cancel-payment'
            const create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": returnUrl + '/?orderId=' + orderId,
                    "cancel_url": cancelUrl
                },
                "transactions": [{
                    "item_list": {
                        "items": allProducts
                    },
                    "amount": {
                        "total": allProducts.map(item => item.price * item.quantity).reduce((a,b) => a+b, 0),
                        "currency": "ILS"
                    },
                    "description": "Hamilton Beach products"
                }]
            };
        

            paypal.payment.create(create_payment_json, function (error, payment) {
                if (error) { 
                    throw error;
                } else {
                    for(let i = 0; i < payment.links.length; i++) {
                        if(payment.links[i].rel === 'approval_url'){
                            res.json({paypalUrl: payment.links[i].href});
                        }
                    }
                }
            });
            
        });
})

app.get('/success', (req,res) => {
    db('orders').where({order_id: req.query.orderId}).select('*')
        .then(order => {
            const payerId = req.query.PayerID;
            const paymentId = req.query.paymentId;
            const token_payment = req.query.token;
            const execute_payment_json = {
                "payer_id": payerId,
                "transactions": [{
                    "amount": {
                        "total": order[0].total_sum.toString(),
                        "currency": "ILS",
                    }
                }]
            };
        
            paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
                if (error) {
                    throw error;
                } else {
                    console.log(JSON.stringify(payment)); //putting this information in the database after it succeed
                    db('carts').where({email: order[0].signin_email}).del()
                        .then(cart => {
                            for(let i = 0; i < cart; i++) {
                                db('payments').insert({
                                    token: token_payment,
                                    street: order[0].street,
                                    city: order[0].city,
                                    zip: order[0].zip,
                                    phonenumber: order[0].phonenumber,
                                    email: order[0].user_email,
                                    user_name: order[0].user_name,
                                    product_name: payment.transactions[0].item_list.items[i].name,
                                    model: payment.transactions[0].item_list.items[i].sku.slice(0, payment.transactions[0].item_list.items[i].sku.indexOf(' ')), 
                                    serial: payment.transactions[0].item_list.items[i].sku.slice(payment.transactions[0].item_list.items[i].sku.indexOf(' ')), 
                                    amount: payment.transactions[0].item_list.items[i].quantity,
                                    unit_price: payment.transactions[0].item_list.items[i].price,
                                    total_price: (Number(payment.transactions[0].item_list.items[i].price) * payment.transactions[0].item_list.items[i].quantity).toString()})
                                    .then(item => item)
                            }
                        })
                        const productsList = payment.transactions[0].item_list.items;
                        let products_name = productsList.map(item => {
                            return (
                                {name: item.name}
                            )
                        });
                        let products_model = productsList.map(item => {
                            return (
                                {model: item.sku.slice(0, item.sku.indexOf(' '))}
                            )
                        });
                        let products_serial = productsList.map(item => {
                            return (
                                {serial: item.sku.slice(item.sku.indexOf(' '))}
                            )
                        });
                        let products_amount = productsList.map(item => {
                            return (
                                {amount: item.quantity}
                            )
                        });
                        let products_price = productsList.map(item => {
                            return (
                                {price: item.price}
                            )
                        });
                            
                        confirmPaymentToOfficeEmail(
                            order[0].user_name,
                            order[0].user_email,
                            order[0].phonenumber,
                            order[0].street,
                            order[0].city,
                            order[0].zip,
                            products_name,
                            products_model,
                            products_serial,
                            products_amount,
                            products_price,
                            payment.transactions[0].amount.total
                        )
                        res.json({successUrl: 'http://localhost:3000/success-payment'});
                    
                }
            });
        })

});

app.get('/cancel', (req,res) =>{
    res.send('Cancelled')
});

app.post('/api/form',(req,res) => {
    const {email, name, phonenumber, message} = req.body;
    contactEmail(email, name, phonenumber, message)
    res.end('done!')
});

app.get('/user', verifyToken, async (req,res) => {
    const payload = await jwt.verify(req.token, JWT_WEB_SERIAL)
    let me = await db('users').where('email', '=', payload.user.email).select('*')
    res.end(JSON.stringify(me[0]))
})

//for decoting the jwt
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undifiend') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403);
    }
}

app.post('/api/add-item', (req,res) => {
    db('carts').insert({
        email:req.body.email, 
        model: req.body.model,
        price: req.body.price,
        serial: req.body.serial, 
        amount: req.body.amount, 
        image_url: req.body.image_url,
        category: req.body.category})
    .then(cart => {
        res.json(cart)})
})

app.post('/api/update-item', (req,res) => {
    db('carts').where({email:req.body.email, model:req.body.model, serial: req.body.serial}).select('*')
        .then(data => {
            return (
                db('carts')
                .update({amount: req.body.amount})
                .where({email:req.body.email, model:req.body.model, serial: req.body.serial})
                .then(cart => {res.json(data)})
            )
        })
})

app.post('/api/delete-item', (req,res) => {
    db('carts').where({email:req.body.email, model:req.body.model, serial: req.body.serial}).select('*')
        .then(data => {
            return (
                db('carts')
                .where({email:req.body.email, model:req.body.model, serial: req.body.serial})
                .del()
                .then(cart => {res.json(data)})
            )
        })
})

app.post('/signin', (req,res) => {
    db('login').where({email:req.body.email}).select('*')
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password.toString(), data[0].hash);
            if(isValid) {
                return db('carts').where('email', '=', req.body.email).select('*')
                    .then(cart =>{
                        return db('users').where('email', '=', req.body.email).select('*')
                        .then(user => { 
                            jwt.sign({user: req.body, cart: cart}, JWT_WEB_SERIAL,{ expiresIn: '7d' }, (err, token) => {
                                res.json({
                                    token: token,
                                    user: user[0],
                                    cart: [...cart]
                                });
                            })

                        })
                    })
                    .catch(err => res.status(400).json('Unable to get user'))
            }
            else {
                res.status(400).json('Wrong credentials!')
            }
        })
        .catch(err => res.status(400).json('Wrong credentials!'))
})

app.post('/register', (req,res) => {
    const {password, confirmPassword, email, name} = req.body;
    if(password !== confirmPassword) {
        return res.send("The passwords don't match");
    }   
    const hash = bcrypt.hashSync(password);
    db.transaction(trx =>{
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0],
                    name: name,
                    joined: new Date()
                })
                .then(user => {
                    registrationEmail(email, name)
                    return (
                        jwt.sign({user: req.body}, JWT_WEB_SERIAL,{ expiresIn: '7d' }, (err, token) => {
                            res.json({
                                token: token,
                                user: user[0]
                            });
                        })
                    )
                })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => console.log(err))
})

app.get('/api/backgroundimages', (req, res) => {
    db.select('*').from('promotionalimages')
        .then(sliderImages => res.json(sliderImages))
})

app.get('/api/products', (req, res) => {
    db.select('*').from('products')
        .then(products => res.json(products))
})

app.get('/api/products/:category', (req, res) => {
    db('products').where({category: req.params.category}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/products/:category/:model', (req, res) => {
    db('products').where({model: req.params.model, category: req.params.category}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/product-category-background-images', (req, res) => {
    db.select('*').from('product_category_background_images')
        .then(category => res.json(category))
})

app.get('/api/product-category-details', (req, res) => {
    db.select('*').from('product_category_details')
        .then(category => res.json(category))
})

app.get('/api/product-category-background-images/:category', (req, res) => {
    db.select('*').where({category: req.params.category}).from('product_category_background_images')
        .then(sliderImages => res.json(sliderImages))
})

app.get('/api/products-images/:model', (req, res) => {
    db('productimages').where({model: req.params.model}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/recipes', (req, res) => {
    db.select('*').from(('recipes'))
        .then(category => res.json(category))  
})

app.get('/api/recipes/:category', (req, res) => {
    db.select('*').where({category: req.params.category}).from(('recipes'))
        .then(category => res.json(category))  
})

app.get(`/api/recipes/:category/:english_name`, (req, res) => {
    db('recipes').where({category: req.params.category, english_name: req.params.english_name}).select('*')
        .then(english_name => res.json(english_name))
})

app.get(`/api/product_features/:product_model`, (req, res) => {
    db('product_features').where({product_model: req.params.product_model}).select('*')
        .then(features => res.json(features))
})

app.get(`/api/recipe_ingredients/:recipe_name`, (req, res) => {
    db('recipe_ingredients').where({recipe_name: req.params.recipe_name}).select('*')
        .then(ingredients => res.json(ingredients))
})

app.get(`/api/recipe_instructions/:recipe_name`, (req, res) => {
    db('recipe_instructions').orderBy('instruction_number').where({recipe_name: req.params.recipe_name}).select('*')
        .then(instructions => res.json(instructions))
})

app.get('/api/spare_parts', (req, res) => {
    db.select('*').from(('spare_parts'))
        .then(part => res.json(part))
})

app.get('/api/spare_parts/:product_model', (req, res) => {
    db('spare_parts').where({product_model: req.params.product_model}).select('*')
        .then(product_model => res.json(product_model))  
})

app.get('/api/spare_parts/:product_model/:part_model', (req, res) => {
    db('spare_parts').where({product_model: req.params.product_model, part_model: req.params.part_model}).select('*')
        .then(part_model => res.json(part_model))  
})

app.get('/api/servicelocations', (req, res) => {
    db.select('*').from('servicelocations')
        .then(locations => res.json(locations))
})

app.get('/api/authorized-sellers', (req, res) => {
    db.select('*').from('authorized_stores')
        .then(store => res.json(store))
})

app.get('/api/cart/:email', (req,res) => {
    db.select('*').from('carts').where({email:req.params.email})
        .then(products => res.json(products))
})

// if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res, next) => {
        const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
        // const composeEnhancers = global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const store = createStore(rootReducer, applyMiddleware(thunk));

        const preloadedState = store.getState();

        const promise = activeRoute.fetchInitialData ? 
            activeRoute.fetchInitialData(req.path): 
            Promise.resolve()

        promise.then((data) => {
            const context = { data }
            const markup = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <Main />    
                    </StaticRouter>
                </Provider>
            )
        
            res.send(`
                <!DOCTYPE html>
                <html dir="rtl">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <script src='/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                        
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
                        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">

                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                        <title>Hamilton Beach</title>
                    </head>
                    <body>
                        <div id="root">${markup}</div>
                        <script>window._PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
                        <script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
                    </body>
                </html>
            `)
        }).catch(next)
    })
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server start at ${port}`)
});
