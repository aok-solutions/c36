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
  router.get('/api/users', db.getAllUsers);

  return router
}();
