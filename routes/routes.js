const express = require('express');
const errHandler = require('../utilities/errHandlers.js');
const controllerUsers = require('../controllers/users.js');
const controllerService = require('../controllers/services.js');


const route = express.Router();

route.post('/registerUser', controllerUsers.register);

route.post('/loginUser', controllerUsers.login);

route.post('/createService', controllerService.create);

route.get('/getAllServices', controllerService.getAll);

route.all('*', errHandler.invalidPath);




module.exports = route;


