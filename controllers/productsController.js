const express = require('express');
const Product = require('../models/product');
const {validationResult} = require('express-validator/check');

function create(req, res, next){

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({
      errors:errors.array()
    });
  }

  let product = new Product({
    _description:req.body.description,
    _category:req.body.category,
    _price:req.body.price
  });
  product.save()
      .then((obj)=>{
        res.redirect('/products/');
      })
      .catch((err)=>{
        return res.status(500).json({
          errors:[{message:'Algo salio mal!!!'}],
          data:[]
        });
      });
};


function list(req, res, next){
  let page = req.params.page ? req.params.page : 1;

  const options = {
    page: page,
    limit: 20,
    select : '_description _category _price'
  };

  Product.paginate({}, options)
    //.select('_name _lastName _age')
    .then((objs)=>{
      res.render('products/list',{products:objs});
    })
  .catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function blank(req, res, next){
  res.render('products/blank', {});
}


module.exports = {
  create,
  list,
  blank
  /*index,
  update,
  destroy*/
};
