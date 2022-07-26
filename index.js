const express = require('express');
const logger = require('morgan');
const cors = require('cors')


const app = express();

//require routes
const userRoutes = require('./routes/users');
const tripsRoutes = require('./routes/trips');

//for our authentication 
const authRoutes = require('./routes/authenticationRoutes')


require('dotenv').config();
require('./config/database');



app.use(cors())
app.use(logger('tiny'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//mount routes
app.use('/user', userRoutes);
app.use('/trips',tripsRoutes);
app.use(authRoutes);

const port = process.env.PORT || 3020;

app.listen(port, function () {
    console.log(`Sith lord jarjar binks is running at port ${port}`);
})