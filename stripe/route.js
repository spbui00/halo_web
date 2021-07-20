const stripe = require('stripe')('pk_test_51Hr9HEAjLMvXx7FwrFsOwLnj88MGoHhrJLJLIoCBEacmoZikIRrELjaSsK2GHYCX5Fhwf17XTAaASs08ygF9Jxwr00zZ1Q0Pli');
const router = require('express').Router();
const Product = require('../models/product.model');
const Order = require('../models/order.model');

const calculatePaymentAmount = async items => {
    const productList = await products.list();
    // Look up sku for the item so we can get the current price.
    const skus = productList.data.reduce(
      (a, product) => [...a, ...product.skus.data],
      []
    );
    const total = items.reduce((a, item) => {
      const sku = skus.filter(sku => sku.id === item.parent)[0];
      return a + sku.price * item.quantity;
    }, 0);
    return total;
  };

module.exports = router;

