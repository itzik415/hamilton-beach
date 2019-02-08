const getDb = require('./database').getDb;

class Product {
    constructor(model,mainImage,sliderImages,shortDescription,lastPrice,price,saving,category,features) {
        this.model = model;
        this.mainImage = mainImage;
        this.sliderImages = sliderImages;
        this.shortDescription = shortDescription;
        this.lastPrice = lastPrice;
        this.price = price;
        this.saving = saving;
        this.category = category;
        this.features = features;
    }

    save() {
        const db = getDb();
        db.collection('products').insertOne(this)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Product;

// "id": "number that is generating by the database"
// model,mainImage,shortDescription,lastPrice,price,saving,category,features










