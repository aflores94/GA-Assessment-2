//jshint esversion:6 

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express To-Do'});
});

module.exports = router;