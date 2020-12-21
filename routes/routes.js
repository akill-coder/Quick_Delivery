const express = require('express');
const errHandler = require('../utilities/errHandlers.js');
const controllerUsers = require('../controllers/users.js');
const controllerService = require('../controllers/services.js');
const controllerBookings = require('../controllers/bookings.js');


const route = express.Router();

// user routes
route.post('/registerUser', controllerUsers.register);
route.post('/loginUser', controllerUsers.login);
route.get('/getProfileDetails/:mailId', controllerUsers.getById);
route.put('/updateUser', controllerUsers.update);
route.get('/getBookingsUser/:mailId', controllerUsers.getBookings);

// services routes
route.post('/createService', controllerService.create);
route.get('/getAllServices', controllerService.getAll);
route.get('/getServiceData/:serviceId', controllerService.getById);
route.put('/updateService', controllerService.update);


// booking routes
route.post('/postBookings', controllerBookings.create);


// invalid routes
route.all('*', errHandler.invalidPath);




module.exports = route;


