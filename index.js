const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app    = express();
const PORT   = process.env.PORT || 5050;
const server = require('http').createServer( app );

// initialise middleware and services
var services = require('./config/services.js');
   let redis = services.redisStore();
   module.exports.redisClient = redis;

var config = require('./config/settings.js');
    config.development( app , __dirname );
    config.middleware(  app , __dirname );

const testENV = process.env.TESTING || 'default test text';

// connect to mongodb atlas.
mongoose.connect( process.env.DATABASE_ATLAS , { useNewUrlParser: true } )
        .then ( ( ) => console.log('mongodb Connected'))
        .catch( err => console.log( err ));


app.get('/', ( req, res , next ) => {
    res.status( 200 ).send( `hello , ${ testENV } ` );
});

// api routes
app.use('/api' , require('./dev_api/api') );
// error middleware
require('./dev_api/errors').errors( app );

server.listen( PORT, ( ) => console.log(`Listening on ${ PORT }`));
