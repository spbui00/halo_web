'use strict';

const config = require('./config');
const stripe = require('stripe')(config.stripe.secretKey);
const Product = require('../models/product.model');

const products = await Product.find()
    .then(data => {
        data.map(aProduct => {
            return {
                id: aProduct.code,
                name: aProduct.name,
                price: aProduct.name
            };
        });
    }).catch(err => console.log(err));

const createStoreProducts = async () => {
  try {
    const stripeProducts = await Promise.all(
      products.map(async product => {
        const stripeProduct = await stripe.products.create({
          id: product.id,
          name: product.name,
          type: 'good',
          attributes: Object.keys(product.attributes),
          metadata: product.metadata,
        });

        const stripeSku = await stripe.skus.create({
          product: stripeProduct.id,
          price: product.price,
          currency: config.currency,
          attributes: product.attributes,
          inventory: {type: 'infinite'},
        });

        return {stripeProduct, stripeSku};
      })
    );

    console.log(
      `🛍️  Successfully created ${stripeProducts.length} products on your Stripe account.`
    );
  } catch (error) {
    console.log(`⚠️  Error: ${error.message}`);
  }
};

createStoreProducts();
