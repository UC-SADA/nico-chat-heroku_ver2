var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var msg = "";
  res.render("index",{
    title : "niconico-Display",
    msg : msg,
  });
});

module.exports = router;
