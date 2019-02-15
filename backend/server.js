const cors = require('cors');
const express = require('express');
const knex = require('knex');
const path = require('path');
// const multer = require('multer');
// const upload = multer({ dest: 'public/uploads/'});

var filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'itzikshaoulian',
        password : '',
        database : 'hamilton-beach'
    }
});

const app = express();
app.use(cors());

app.get('/api/backgroundimages', (req, res) => {
    db.select('*').from('promotionalimages')
        .then(sliderImages => res.json(sliderImages))
})

app.get('/api/product-category-background-images/:category', (req, res) => {
    db.select('*').where({category: req.params.category}).from('product_category_background_images')
        .then(sliderImages => res.json(sliderImages))
})

app.get('/api/product-category-background-images', (req, res) => {
    db.select('*').from('product_category_background_images')
        .then(category => res.json(category))
})

app.get('/api/products', (req, res) => {
    db.select('*').from('products')
        .then(products => res.json(products))
})

app.get('/api/products-images/:model', (req, res) => {
    db('productimages').where({model: req.params.model}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/products/:category/:model', (req, res) => {
    db('products').where({model: req.params.model, category: req.params.category}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/products/:category', (req, res) => {
    db('products').where({category: req.params.category}).select('*')
        .then(products => res.json(products))  
})

app.get('/api/servicelocations', (req, res) => {
    db.select('*').from('servicelocations')
        .then(locations => res.json(locations))
})

app.get('/api/authorized-sellers', (req, res) => {
    db.select('*').from('authorized_stores')
        .then(store => res.json(store))
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

    
    