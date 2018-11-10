const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = Schema({
  _name:String,
  _lastName:String,
  _age:Number
});

class User {

  constructor(name, lastName, age){
    _name = name;
    _lastName = lastName;
    _age = age;
  }

  get fullName(){
    return `${this._name} ${this._lastName}`;
  }

  get name(){
    return this._name;
  }

  set name(v){
    this._name = v;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(v){
    this._lastName = v;
  }

  get age(){
    return this._age;
  }

  set age(v){
    this._age = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(User);
module.exports = mongoose.model('User', schema);
