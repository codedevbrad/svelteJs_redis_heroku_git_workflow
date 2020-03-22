var assert = require('assert');
var request = require('request');

var expect = require('chai').expect;
var should = require('chai').should();

var loginController = ( input ) => {
    return input < 5;
}

describe('Basic Mocha String Test', function () {
      it('should return number of charachters in a string', ( ) => {
           assert.equal("Hello".length, 5);
       });
       it('should return first charachter of the string', ( ) => {
           assert.equal("Hello".charAt(0), 'H');
       });
       it('should return true if number less than',  ( ) => {

          var isValid = loginController( 3 );
          //assert.equal(isValid, true);
          isValid.should.equal(true);
       });
});

describe('server request checks' , ( ) => {
      it('Main page content', function(done) {
           request('http://localhost:5000/' , function(error, response, body) {
               expect(response.statusCode).to.equal(200);
               done();
           });
      });
});
