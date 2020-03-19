const mongoose  = require('mongoose');
const config    = require('../../config/settings.js');
const TestModel = require('./item').items;

module.exports.GET_data = ( req , res , next ) => {
   TestModel.find()
            .then( data => res.status( 200 ).send( data ))
            .catch( next );
};
