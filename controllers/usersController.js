const express = require('express');

function create(req, res, next){
  res.send(`Crea un Usuario con nombre ${req.body.name}` );
};

function list(req, res, next){
  //let name = req.params.name ? req.params.name : 'SIN NOMBRE';
  res.render('users/list', {name: req.params.name});
};

function index(req, res, next){
  res.send(`Lista un Usuario con un ${req.params.id} especifico.`);
};

function update(req, res, next){
  res.send("Edita un Usuario con un Id especifico.");
};

function destroy(req, res, next){
  res.send("Borra un Usuario con un Id especifico.");
};

module.exports = {
  create,
  list,
  index,
  update,
  destroy
};
