var express = require('express');
var router = express.Router();
var DBManager = require("../tools/DBManager");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register",function (req,res) {
    
});

module.exports = router;
