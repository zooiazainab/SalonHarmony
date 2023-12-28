const mongoose = require('mongoose');

//create a schema

const LoginSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

//collection part
const users_collections = new mongoose.model("users",LoginSchema);
module.exports = users_collections;

 
 
