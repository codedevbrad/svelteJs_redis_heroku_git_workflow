
// spa routes (  )
const express = require('express');
const api    = express.Router();
const client = require('../index.js').redisClient;

// routes
const Route1 = require('./services/service_content/service_controller');

const middleware = ( req , res , next ) => {
    client.get( "db_data" , ( err , data ) => {
        if (err) throw 'could not get data';
        if ( data !== null ) {
          console.log('getting from redis');
          res.status( 200 ).send({ set: true , data });
        } else {
          next();
        }
    });
}

api.get('/getData' ,  middleware , Route1.GET_data );

api.get('/redisSet' , ( req , res , next ) => {
    client.set("key", "this is some redis new value" , client.print );
    res.status( 200 ).send(`data is set:`);
});

api.get('/redisData' , ( req , res , next ) => {
    client.get("key", ( err , reply ) => {
        res.status( 200 ).send( ` data has been set: ${reply}` );
    });
});

api.get('/redisDelete' , ( req , res , next ) => {
    client.del("db_data");
    res.status( 200 ).send('deleted');
})


module.exports = api;
