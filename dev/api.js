
// spa routes ( food admin )
const express  = require('express');
const api      = express.Router();

// route
const Route1 = require('./services/routeHandle');

api.get('/getData' , Route1.GET_data );


module.exports = api;
