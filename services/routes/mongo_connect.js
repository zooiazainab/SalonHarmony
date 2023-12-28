const mongoose = require('mongoose')
const Servicedb = require('./config')
const connect = mongoose.connect("mongodb://localhost:27017/userdata");


//check database connected or not 
connect.then(()=>{
    console.log("Database connected")
})
.catch( ()=>{
    console.log("data cannot be connected")
});
module.exports = connect
