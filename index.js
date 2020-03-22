const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { promisify } = require("util");

const app    = express();
const PORT   = process.env.PORT || 5050;
const server = require('http').createServer( app );

// initialise middleware
var config = require('./config/settings.js');
    config.development( app , __dirname );
    config.middleware(  app , __dirname );

const testENV = process.env.TESTING || 'default test text';

// redis is a cache db.
   // getting data from heroku server.
var rtg = require("url").parse(process.env.REDISTOGO_URL);
var client = require("redis").createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);

client.on("ready", ( success ) => {
  console.error('redis is set up');
});
client.on("error", ( error ) => {
  console.error(error);
});

// connect to mongodb atlas.
mongoose.connect( process.env.DATABASE_ATLAS , { useNewUrlParser: true } )
        .then ( ( ) => console.log('mongodb Connected'))
        .catch( err => console.log( err ));


app.get('/', ( req, res , next ) => {
    console.log( process.env.NODE_ENV );
    res.status( 200 ).send( `hello , ${ testENV } ` );
});

app.get('/redisSet' , ( req , res , next ) => {
    client.set("key", "this is some redis value", client.print);
    res.status( 200 ).send(`data is set:`);
});

app.get('/redisData' , ( req , res , next ) => {
    client.get("key", ( err , reply ) => {
        res.status( 200 ).send( ` data has been set: ${reply}` );
    });
});


// api routes
app.use('/api' , require('./dev/api') );
// error middleware
require('./dev/errors').errors( app );


server.listen( PORT, () => console.log(`Listening on ${ PORT }`))
