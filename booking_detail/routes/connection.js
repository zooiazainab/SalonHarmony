const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/userdata");
const bookingdetail = require('./config');


connect.then(()=>{
    console.log("Database connected succesfully")
}).catch(()=>{
    console.log("database is not connected")
});

module.exports= connect;
