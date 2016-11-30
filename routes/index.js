var express = require('express');
var router = express.Router();
var cors = require('cors');

// accept GET request
router.get('/', cors(), function(req, res, next){
  res.render('index.html');
});

module.exports = router;
