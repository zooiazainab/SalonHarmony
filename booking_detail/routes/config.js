const mongoose = require('mongoose');

// create schema

const booking = new mongoose.Schema({

    clientname: { type: String , required: true },
    servicename: { type: String , required: true },
    servicetype: { type: String , required: true },
    descript: { type: String , required: true },
    price: { type: Number , required: true },
    bookingdate: { type: Date , required: true }
});

const bookingdata = new mongoose.model('bookingdetail', booking);
module.exports = bookingdata;

