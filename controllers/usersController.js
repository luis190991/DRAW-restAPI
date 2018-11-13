const express = require('express');
const User = require('../models/user');
const {validationResult} = require('express-validator/check');

function list(req, res, next){
  res.render('users/list', {});
}

function create(req, res, next){

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({
      errors:errors.array()
    });
  }

  let user = new User({
    _name:req.body.name,
    _lastName:req.body.lastName,
    _age:req.body.age
  });
  user.save()
      .then((obj)=>{
        return res.status(200).json({
          errors:[],
          data:[obj]
        });
      })
      .catch((err)=>{
        return res.status(500).json({
          errors:[{message:'Algo salio mal!!!'}],
          data:[]
        });
      });
};

function getAll(req, res, next){

  let page = req.params.page ? req.params.page : 1;

  const options = {
    page: page,
    limit: 3,
    select : '_name _lastName _age'
  };

  User.paginate({}, options)
    //.select('_name _lastName _age')
    .then((objs)=>{
  res.status(200).json({
      errors:[],
      data : objs
    });
  }).catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function index(req, res, next){
  User.findById(req.params.id)
      .then((obj)=>{
        res.status(200).json({
          errors:[],
          data:obj
        });
      })
      .catch((err)=>{
        res.status(500).json({
          errors:[{message:'Algo salio mal'}],
          data:[]
        });
      });
};

function update(req, res, next){
  User.findById(req.params.id)
  .then((obj)=>{
    obj.name = req.body.name? req.body.name : obj.name;
    obj.lastName = req.body.lastName? req.body.lastName : obj.lastName;
    obj.age = req.body.age? req.body.age : obj.age;
    obj.save()
    .then((obj)=>{
      res.status(200).json({
        errors:[],
        data:obj
      });
    })
    .catch((err)=>{
      res.status(500).json({
        errors:[{message:'Algo salio mal'}],
        data:[]
      });
    });
  })
  .catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

function destroy(req, res, next){
  User.remove({_id:req.params.id})
  .then((obj)=>{
    res.status(200).json({
      errors:[],
      data:obj
    });
  })
  .catch((err)=>{
    res.status(500).json({
      errors:[{message:'Algo salio mal'}],
      data:[]
    });
  });
};

module.exports = {
  getAll,
  create,
  list,
  index,
  update,
  destroy
};
