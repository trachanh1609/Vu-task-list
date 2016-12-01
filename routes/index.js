var express = require('express');
var router = express.Router();

// accept GET request
router.get('/', function(req, res, next){
  res.render('index.html');
});

module.exports = router;
