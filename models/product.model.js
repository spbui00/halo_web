const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    code: {type: Number},
    name: {type: String},
    price: {type: Number}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;