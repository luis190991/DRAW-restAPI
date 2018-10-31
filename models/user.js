const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  name:String,
  lastName:String,
  age:Number
});

module.exports = mongoose.model('User', schema);
