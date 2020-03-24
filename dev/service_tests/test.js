var assert  = require('assert');
var request = require('request');

var expect = require('chai').expect;
var should = require('chai').should();

var loginController = ( input ) => {
    return input < 5;
}

describe('Basic Mocha String Test' , ( ) => {
      it('should return number of charachters in a string', ( ) => {
           assert.equal("Hello".length, 5);
       });
       it('should return first charachter of the string', ( ) => {
           assert.equal("Hello".charAt(0), 'H');
       });
       it('should return true if number less than',  ( ) => {
           var isValid = loginController( 3 );
           isValid.should.equal(true);
       });
});

describe('server request checks' , ( ) => {
      it('Main page content', ( done ) => {
           request('http://localhost:5000/' , ( error , response , body ) => {
               expect(response.statusCode).to.equal(200);
               done();
           });
      });
});
