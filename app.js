const express = require('express');
const  path = require('path');
const bodyParser= require('body-parser');
const signupLoginRouter = require('./Register-login/routes/index.js');
const homeRouter = require('./homepage/routes/index.js');
const bookingsRouter = require('./booking_detail/routes/server.js');
const servicesRouter = require('./services/routes/index.js');
const app = express();


app.use(express.static('./services/public'));
app.set('views', [
    path.join(__dirname, 'Register-login', 'views'),
    path.join(__dirname, 'homepage', 'views'),
    path.join(__dirname, 'booking_detail', 'views'),
    path.join(__dirname, 'services', 'views')
]);

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.use('/home', homeRouter);
app.use('/home/bookings', bookingsRouter);
app.use('/home/services', servicesRouter);
app.use('/', signupLoginRouter);


const port = 3500;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  // Export the app and server instance
  module.exports = { app, server };