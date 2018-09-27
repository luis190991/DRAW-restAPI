const express = require('express');

function plus(req, res, next){
  res.send(`${parseInt(req.params.n1) + parseInt(req.params.n2)}`);
};

function multiply(req, res, next){
  res.send(`${parseInt(req.body.n1) * parseInt(req.body.n2)}`);
};

function divide(req, res, next){
  res.send(`${parseInt(req.body.n1) / parseInt(req.body.n2)}`);
};

function minus(req, res, next){
  res.send(`${parseInt(req.params.n1) - parseInt(req.params.n2)}`);
};

module.exports = {
  plus,
  minus,
  multiply,
  divide
};
