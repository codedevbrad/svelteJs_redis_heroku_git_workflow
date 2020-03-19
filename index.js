const express = require('express');
const path = require('path');

const app    = express();
const PORT   = process.env.PORT || 5000;
const server = require('http').createServer( app );

// initialise middleware
var config = require('./config/settings.js');
    config.middleware( app , __dirname );

// // connect to mblabs
// mongoose.connect( process.env.DATABASE_ATLAS , { useNewUrlParser: true } )
//         .then ( ()  => console.log('mongodb Connected'))
//         .catch( err => console.log( err ));
const testENV = process.env.TESTING || 'default test text';

app.get('/', (req, res , next ) => {
    res.status( 200 ).send( `hello , ${ testENV } ` );
});

app.use( '/api' , require('./dev/api') );

// error middleware
require('./dev/errors').errors( app );


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
