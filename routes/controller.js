var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var msg = "オープンルーム";
  res.render("controller",{
    room:"Open_room",
    name:"Guest",
    msg : msg
  });
});
router.get('/:room_id', function(req, res, next) {
  var msg = "「" + req.params.room_id + "」ルームにログインしています。";
  res.render("controller",{
    room:req.params.room_id,
    name: "Guest",
    msg : msg
  });
});
router.get('/:room_id/:name', function(req, res, next) {
  var msg = req.params.name + "さんで<BR>" + "「" + req.params.room_id + "」ルームにログインしています。";
  res.render("controller",{
    room:req.params.room_id,
    name:req.params.name,
    msg : msg
  });
});

module.exports = router;
