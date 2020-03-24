const express  = require('express');
const redis    = require("redis");

module.exports = {

    redisStore: ( ) => {

        // redis is a cache db /  getting data from heroku server.
        var rtg = require("url").parse(process.env.REDISTOGO_URL);
        var client = redis.createClient(rtg.port, rtg.hostname);
            client.auth(rtg.auth.split(":")[1]);

        client.on( 'error' , ( ) => {
              console.log('could not setup redis db.')
        });
        client.on( 'ready' , ( ) => {
              console.log('redis is working');
        });

        return client;
    } 
}
