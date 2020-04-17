const mongoose  = require('mongoose');
const config    = require('../../../config/settings.js');
const client    = require('../../../index.js').redisClient;

const TestModel = require('./service_model').items;

module.exports.GET_data = ( req , res , next ) => {
   TestModel.find()
            .then( data => {
                console.log('getting from db')
                let dataString = JSON.stringify( data );
                client.set("db_data", dataString , client.print );
                res.status( 200 ).send( { set: false , data } )
            })
            .catch( next );
};
