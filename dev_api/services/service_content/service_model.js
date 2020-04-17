const mongoose = require('mongoose');

module.exports.items = mongoose.model('tests', new mongoose.Schema ({
    name:    { type: String , required: true } ,
    age:     { type: Number , required: true } ,
}));


function isMyFieldRequired () {
  return typeof this.name === 'string' ? false : true
}
