const express  = require('express');
const path     = require('path');
const cors     = require('cors');
const morgan   = require('morgan');;

module.exports = {

    middleware: ( app ) => {
        // body parser middleware
        app.use( express.urlencoded({ extended: true }))
        // parse application/json
        app.use( express.json());
        app.use( cors());
        app.use( morgan('dev') );
    }
}
