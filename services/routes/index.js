const express = require('express');
const route = express.Router();
const path = require('path')
const Servicedb = require('./config');
const connect = require('./mongo_connect');


route.get('/add_services', (req, res) => {
    console.log('Reached GET /add_services');
    const indexPath = path.join(__dirname, '../views/add_services.ejs');
    res.render(indexPath);
});

route.get('/', async (req, res) => {
    try {
        const services = await Servicedb.find();
        const indexPath = path.join(__dirname, '../views/index.ejs');
        res.render(indexPath, { services: services });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching services');
    }
});






// Handle the form submission to add a new service
route.post('/add_services', async (req, res) => {
    try {
        const newService = new Servicedb({
            name: req.body.name,
            type: req.body.type,
            descript: req.body.descript,
            price: req.body.price
        });

        await newService.save();

        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error adding service');
    }
});

// Render the form to update a service
// Render the form to update a service with pre-filled data
route.get('/update_service/:id', async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Servicedb.findById(serviceId);
        res.render('update_service', { service });
    } catch (error) {
        res.status(500).send('Error fetching service details');
    }
});

// Handle the form submission to update a service
route.post('/update_service/:id', async (req, res) => {
    try {
        const serviceId = req.params.id;
        const updatedService = {
            name: req.body.name,
            type: req.body.type,
            descript: req.body.descript,
            price: req.body.price
        };

        await Servicedb.findByIdAndUpdate(serviceId, updatedService);

        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error updating service');
    }
});


// Add this route handler to handle service deletion
route.get('/delete_service/:id', async (req, res) => {
    try {
        const serviceId = req.params.id;
        await Servicedb.findByIdAndDelete(serviceId);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error deleting service');
    }
});


route.get('*',(req,res)=>{
    res.send("hello world");
});

module.exports = route;
