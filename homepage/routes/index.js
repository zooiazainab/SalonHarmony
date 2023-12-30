const express = require('express');
const route = express.Router();
// Homepage route
route.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs view
});
module.exports = route;
