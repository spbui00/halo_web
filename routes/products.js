const router = require('express').Router();
const Product = require('../models/product.model');

router.get('/', async(req, res) => {
    Product.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err));
});

router.post('/add', async(req,res) => {
    const newProduct = new Product({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(newProduct);
    } catch(error) {
        res.status(400).send(err);
    };
});

router.post('/delete', async(req,res) => {
    Product.findOneAndDelete({code: req.body.code})
        .then(res.status(200).send("Product deleted"))
        .catch(err => res.status(400).send(err));
});

module.exports = router;