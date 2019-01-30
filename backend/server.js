const cors = require('cors')
const express = require('express');
const fs = require('fs');
const app = express();
app.use(cors());

app.get('/api/backgroundimages', (req, res) => {

    fs.readFile('./data/sliderImages.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

    
})

app.get('/api/recipeimages', (req, res) => {

    fs.readFile('./data/recipesImades.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

})

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server start at ${port}`)
})
