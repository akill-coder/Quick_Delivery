const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const route = require('./routes/routes.js');
const errHandler = require('./utilities/errHandlers');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use('/', route);


app.use(errHandler.serverError);




const port = process.env.port || 3000;

app.listen(port , () => console.log(`Server is running on ${port}`));
