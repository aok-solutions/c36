'use strict'

var router = require('express').Router();
var db = require('./database/queries');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
  });

  router.get('/helloworld', function(req,res){
    return res.render('helloworld.html');
  });

  router.get('/landing', function(req, res) {
    return res.render('landing.html');
  });

  /* Your code here */
  router.get('/sign_up', function(req,res){
    return res.render('sign_up.html');
  });

  router.get('/api/users', db.getAllUsers);
  router.get('/api/users/:id', db.getSingleUser);
  router.post('/api/users', db.createUser);
  router.put('/api/users/:id', db.updateUser);
  router.delete('/api/users/:id', db.removeUser);

  return router
}();
