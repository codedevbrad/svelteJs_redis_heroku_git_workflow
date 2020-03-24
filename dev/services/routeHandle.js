const mongoose  = require('mongoose');
const config    = require('../../config/settings.js');
const client    = require('../../index.js').redisClient;

const TestModel = require('./item').items;

module.exports.GET_data = ( req , res , next ) => {
   TestModel.find()
            .then( data => {
                let dataString = JSON.stringify( data );
                client.set("data", dataString , client.print );
                res.status( 200 ).send( { set: false , data } )
            })
            .catch( next );
};
