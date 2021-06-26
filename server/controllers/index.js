/*COMP229 - Midterm
  index.js
  June 25, 2021
  Farishta Sultani*/ 
let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next)=> {
    res.render('index', {title: 'Home'});
}