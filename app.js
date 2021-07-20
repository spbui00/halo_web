const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
//STRIPE CONFIG
const config = require('./stripe/config');
const stripe = require('stripe')(config.stripe.secretKey);

dotenv.config();

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT,  
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db");
})

//ROUTES
const productsRouter = require('./routes/products');
const orderRouter = require('./routes/order');

port = 9000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true}));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(express.urlencoded());
app.use(bodyParser.json())
app.use(express.json());

app.use('/products', productsRouter);
app.use('/order', orderRouter);

const con = app.listen(port, () => {
    console.log("Server running on port: " + port);
});