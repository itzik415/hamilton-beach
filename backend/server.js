const cors = require('cors');
const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'itzikshaoulian',
        password : '',
        database : 'hamilton-beach'
    }
});

// const fs = require('fs');
// const pgp = require('pg-promise')();
// const cons = require('consolidate');
// const dust = require('dustjs-helpers');
// const path = require('path');
// const bodyParser = require('body-parser');

const app = express();


app.use(cors());

app.get('/api/backgroundimages', (req, res) => {

    // Connecting to a json file
    // fs.readFile('./data/sliderImages.json', (err, json) => {
    //     let obj = JSON.parse(json);
    //     res.json(obj);
    // });
    
    db.select('*').from('promotionalimages')
        .then(sliderImages => res.json(sliderImages))
})

app.get('/api/produts', (req, res) => {
    db.select('*').from('products')
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



// COPY servicelocations FROM '/Users/itzikshaoulian/Desktop/hamilton-beach/backend/xl-test.csv' DELIMITER ';'