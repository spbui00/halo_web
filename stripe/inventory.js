'use strict';

const config = require('./config');
const stripe = require('stripe')(config.stripe.secretKey);
// For product retrieval and listing set API version to 2018-02-28 so that skus are returned.
stripe.setApiVersion('2018-02-28');

// List all products.
const listProducts = async () => {
  return await stripe.products.list({limit: 3, type: 'good'});
};

// Retrieve a product by ID.
const retrieveProduct = async productId => {
  return await stripe.products.retrieve(productId);
};

// Get shipping cost from config based on selected shipping option.
const getShippingCost = shippingOption => {
  return config.shippingOptions.filter(
    option => option.id === shippingOption
  )[0].amount;
};

exports.products = {
  list: listProducts,
  retrieve: retrieveProduct,
  getShippingCost,
};
