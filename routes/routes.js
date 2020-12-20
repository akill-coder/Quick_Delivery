const express = require('express');
const errHandler = require('../utilities/errHandlers.js');
const controllerUsers = require('../controllers/users.js');


const route = express.Router();

route.post('/registerUser', controllerUsers.registerUser);

route.all('*', errHandler.invalidPath);




module.exports = route;


