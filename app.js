const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const keys = require('./environments/environment.dev')

// Routs
const authRouts = require('./routs/auth');
const analyticsRouts = require('./routs/analytics');
const categoryRouts = require('./routs/category');
const orderRouts = require('./routs/order');
const positionRouts = require('./routs/position');


const app = express();

mongoose.connect(keys.mongoURI)
    .then(() => console.log('Mongo DB connect'))
    .catch((e) => console.log('Mongo DB connect error ', e));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')('dev'));

app.use('/api/v1/auth', authRouts);
app.use('/api/v1/analytics', analyticsRouts);
app.use('/api/v1/category', categoryRouts);
app.use('/api/v1/order', orderRouts);
app.use('/api/v1/position', positionRouts);

module.exports = app;
