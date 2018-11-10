const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = Schema({
  _description:String,
  _category:String,
  _price:Number
});

class Product {
  constructor(description, category, price){
    this._description = description;
    this._category = category;
    this._price = price;
  }

  get description(){
    return this._description;
  }

  set description(v){
    this._description = v;
  }

  get category(){
    return this._category;
  }

  set category(v){
     this._category = v;
  }

  get price(){
    return this._price;
  }

  set price(v){
    this._price = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Product);
module.exports = mongoose.model('Product', schema);
