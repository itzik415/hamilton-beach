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


const port = process.env.port || 5000;
    app.listen(port, () => {
        console.log(`Server start at ${port}`)
});



// COPY products FROM '/Users/itzikshaoulian/Desktop/hamilton-beach/backend/hamilton-beach-products-entry.csv' DELIMITER ';' ;

    // Connecting to a json file
    // fs.readFile('./data/sliderImages.json', (err, json) => {
    //     let obj = JSON.parse(json);
    //     res.json(obj);
    // });

    // INSERT INTO product_category_background_images (imageUrl,category) 
    // VALUES 
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_blenders.jpg', 'blenders');
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_food_processor.jpg','food-processors'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_slowcooker.jpg','multi-coockers'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_waffle_maker.jpg','waffle-makers'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_waffle_maker.jpg','waffle-makers'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_toasters.jpg','toasters'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_food_processor.jpg','food-processors'),
    // ('https://www.hamiltonbeach.com/media/cat-headers/category_banner_juicers.jpg','juciers');
    