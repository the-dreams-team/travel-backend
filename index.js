const express = require('express');
const logger = require('morgan');

const app = express();


require('dotenv').config();
require('./config/database');



app.use(logger('dev'));
app.use(express.json());




const port = process.env.PORT || 3020;

app.listen(port, function () {
    console.log(`Sith lord jarjar binks is running at port ${port}`);
})