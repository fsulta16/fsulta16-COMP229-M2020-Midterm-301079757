/*COMP229 - Midterm
  index..js
  June 25, 2021
  Farishta Sultani*/ 
  
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let indexController = require('../controllers/index');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
