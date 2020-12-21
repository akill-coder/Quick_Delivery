const express = require('express');
const errHandler = require('../utilities/errHandlers.js');
const controllerUsers = require('../controllers/users.js');
const controllerService = require('../controllers/services.js');


const route = express.Router();

// user routes
route.post('/registerUser', controllerUsers.register);
route.post('/loginUser', controllerUsers.login);

// services routes
route.post('/createService', controllerService.create);
route.get('/getAllServices', controllerService.getAll);
route.get('/getServiceData/:serviceId', controllerService.getById);
route.put('/updateService', controllerService.update);


// invalid routes
route.all('*', errHandler.invalidPath);




module.exports = route;


