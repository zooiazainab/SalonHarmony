const express = require('express');
const bookingdata = require('./config');
const connect = require('./connection');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const bookings = await bookingdata.find();
        console.log('Fetched Bookings:', bookings);
        const indexPath = path.join(__dirname, '../views/index.ejs');
        res.render(indexPath, { bookings });

    } catch (error) {
        console.log("error");
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

