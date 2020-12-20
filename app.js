const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());




const port = process.env.port || 3000;

app.listen(port , () => console.log(`Server is running on ${port}`));
