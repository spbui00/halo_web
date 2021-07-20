'use strict';
require('dotenv').config();

module.exports = {
  country: 'CZ',
  currency: 'czk',
  paymentMethods: [
    // 'ach_credit_transfer', // usd (ACH Credit Transfer payments must be in U.S. Dollars)
    //'alipay', // aud, cad, eur, gbp, hkd, jpy, nzd, sgd, or usd.
    //'bancontact', // eur (Bancontact must always use Euros)
    'card', // many (https://stripe.com/docs/currencies#presentment-currencies)
    //'eps', // eur (EPS must always use Euros)
    //'ideal', // eur (iDEAL must always use Euros)
    //'giropay', // eur (Giropay must always use Euros)
    //'multibanco', // eur (Multibanco must always use Euros)
    // 'sepa_debit', // Restricted. See docs for activation details: https://stripe.com/docs/sources/sepa-debit
    //'p24', // eur, pln
    //'sofort', // eur (SOFORT must always use Euros)
    //'wechat', // aud, cad, eur, gbp, hkd, jpy, sgd, or usd.
    //'au_becs_debit', //aud
  ],

  stripe: {
    country: process.env.STRIPE_ACCOUNT_COUNTRY || 'CS',
    apiVersion: '2019-03-14',
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },

  // Shipping options for the Payment Request API.
  shippingOptions: [
    {
      id: 'takeaway',
      label: 'Pay and pick',
      detail: 'Customer is picking it up',
      amount: 0,
    },
    {
      id: 'shipping',
      label: 'shipping',
      detail: 'Devivery to home',
      amount: 60,
    },
  ],

  // Server port.
  //port: process.env.PORT || 8000,

  /*ngrok: {
    enabled: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8000,
    subdomain: process.env.NGROK_SUBDOMAIN,
    authtoken: process.env.NGROK_AUTHTOKEN,
  },*/
};
