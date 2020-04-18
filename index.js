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

// connect to mongodb atlas.
mongoose.connect( process.env.DATABASE_ATLAS , { useNewUrlParser: true } )
        .then ( ( ) => console.log('mongodb Connected'))
        .catch( err => console.log( err ));

app.use('/api' , require('./dev_api/api') );

// serve static assets if in production.
if ( process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/public'));
    app.get('*' , ( req , res ) => {
        res.sendFile( path.resolve(__dirname , 'client' , 'public' , 'index.html' ));
    });
}
// error middleware
require('./dev_api/errors').errors( app );


server.listen( PORT, ( ) => console.log(`Listening on ${ PORT }`));
