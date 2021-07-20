const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    name: {type: String},
    adress: {type: String},
    phone: {type: Number},
    card: [{
        code: {type: Number},
        specifications: {type:Array},
        amount: {type: Number}
    }],
    payment_method: {type: String},
    payed: {type: Boolean},
    delivered: {type: String},
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;