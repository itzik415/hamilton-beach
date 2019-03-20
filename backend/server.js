const config = require('config');
const cors = require('cors');
const express = require('express');
const knex = require('knex');
const jwt = require('jsonwebtoken');
// const cons = require('consolidate');

const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const Hogan = require('hogan.js');
const fs = require('fs');
const app = express();
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));







paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ASPY9AWImgC6uBxh_r1QETrL1QXbtLwud8Lmd1jRrNw3EYn8weaSEABWseTAUckE0HNieCEVdOLANbnd',
    'client_secret': 'EDjfERfL26NXjDmt3DW8RiLa4e5dspm4crjyz8q6KSUdhV16c8T1PxVyfmNWAB8fzT5_KHVxa-D4_tZ6'
})


// app.set('view engine', 'ejs');

// app.get('/payment', (req,res) => {
//     res.render('index')
// })
var allProducts = [];
var userEmail = [];
var userName = [];
app.post('/api/pay', (req,res) => {
    db('carts').where({email: req.body.user}).select('category', 'model', 'price', 'amount', 'serial')
        .then(item => {
            for(let i = 0; i < item.length; i++){
                const product = {
                    "name": item[i].category,
                    "sku": item[i].model +' '+ item[i].serial,
                    "price": item[i].price,
                    "currency": "ILS",
                    "quantity": item[i].amount
                }
                allProducts.push(product)
            }
            userEmail.push(req.body.email)
            userName.push(req.body.name)
            const create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": "http://localhost:5000/success",
                    "cancel_url": "http://localhost:5000/cancel"
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
                            res.redirect(payment.links[i].href);
                        }
                    }
                }
            });

        });
})

app.get('/success', (req,res) => {
    const template = fs.readFileSync('./views/payment.hjs', 'utf-8')
    const compiledTemplate = Hogan.compile(template)
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'issacshaouli@gmail.com', 
            pass: 'isaac615243?'  
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `${userEmail[0]}`, // sender address
        to: "itzikshaoulian@gmail.com", // list of receivers
        subject: "אישור רכישת מוצרים מאתר Hamilton Beach", // Subject line
        text: "Hello world?", // plain text body
        html: compiledTemplate.render({name: userName}) // html body
    };
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "total": allProducts.map(item => item.price * item.quantity).reduce((a,b) => a+b, 0),
                "currency": "ILS",
            }
        }]
      };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log(JSON.stringify(payment)); //putting this information in the database after it succeed
            // res.redirect('http://localhost:3000/success-payment');
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) {
                    return console.log(error);
                }
                
                console.log("Message sent: %s", info.messageId);
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));        
                res.redirect('http://localhost:3000/success-payment');
            });
        }
    });

});

app.get('/cancel', (req,res) =>{
    res.send('Cancelled')
});


















app.post('/api/form',(req,res) => {
    const output = `
        <div style="display: flex; flex-direction: column; align-items: flex-end">
            <h3 style="font-size: 52px; text-align: end;">פנייה מהאתר של המילטון ביץ׳ לשירות לקוחות של שאוליאן</h3>
            <p style="font-size: 30px; text-align: end;"> שם הלקוח: ${req.body.name}</p>
            <p style="font-size: 30px; text-align: end;">${req.body.phonenumber} :טלפון</p>
            <p style="font-size: 30px; text-align: end;">${req.body.email} :מייל</p>
            <h3 style="font-size: 40px; text-align: end;">תוכן ההודעה</h3>
            <p style="font-size: 30px; text-align: end;">${req.body.message}</p>
        </div>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'issacshaouli@gmail.com', // generated ethereal user
            pass: 'isaac615243?'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    //sherut@shaoulian.co.il
    let mailOptions = {
        from: `${req.body.email}`, // sender address
        to: "itzikshaoulian@gmail.com", // list of receivers
        subject: "פניה לשירות לקוחות", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
        
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));        
        res.send('working!')
    });
});

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'itzikshaoulian',
        password : '',
        database : 'hamilton-beach'
    }
});

if(!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.')
    process.exit(1);
}



app.get('/user', verifyToken, async (req,res) => {
    const payload = await jwt.verify(req.token, config.get('jwtPrivateKey'))
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
                            jwt.sign({user: req.body, cart: cart}, config.get('jwtPrivateKey'),{ expiresIn: '7d' }, (err, token) => {
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
    const template = fs.readFileSync('./views/registration.hjs', 'utf-8')
    const compiledTemplate = Hogan.compile(template)
    if(req.body.password !== req.body.confirmPassword) {
        return res.send("The passwords don't match");
    }   
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'issacshaouli@gmail.com', 
            pass: 'isaac615243?'  
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `${req.body.email}`, // sender address
        to: "itzikshaoulian@gmail.com", // list of receivers
        subject: "אישור הרשמה לאתר Hamilton Beach", // Subject line
        text: "Hello world?", // plain text body
        html: compiledTemplate.render({name: req.body.name}) // html body
    };
    const hash = bcrypt.hashSync(req.body.password);
    db.transaction(trx =>{
        trx.insert({
            hash: hash,
            email: req.body.email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0],
                    name: req.body.name,
                    joined: new Date()
                })
                .then(user => {
                    transporter.sendMail(mailOptions, (error, info) => {
                        if(error) {
                            return console.log(error);
                        }
                        
                        console.log("Message sent: %s", info.messageId);
                        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));        
                        res.send('working!')
                    });
                    return (
                        jwt.sign({user: req.body}, config.get('jwtPrivateKey'),{ expiresIn: '7d' }, (err, token) => {
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
    .catch(err => res.status(400).json('Unable to register'))
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

app.get(`/api/recipes/:category/:lower_case_name`, (req, res) => {
    db('recipes').where({category: req.params.category, lower_case_name: req.params.lower_case_name}).select('*')
        .then(lower_case_name => res.json(lower_case_name))
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


const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server start at ${port}`)
});


// COPY authorized_stores FROM '/Users/itzikshaoulian/Desktop/hamilton-beach/backend/stores-list.csv' DELIMITER ';' ;

    // Connecting to a json file
    // fs.readFile('./data/sliderImages.json', (err, json) => {
    //     let obj = JSON.parse(json);
    //     res.json(obj);
    // });


    // INSERT INTO authorized_stores  (phonenumber , address , name , city ) 
    // VALUES 
    // 

    
    