var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var room = "Open_room"
  var name = "Guest"
  res.render("display",{
    room:room,
    name:name,
  });
});
router.get('/:room_id', function(req, res, next) {
  var room = req.params.room_id
  var name = "Guest"
  res.render("display",{
    room:room,
    name:name,
  });
});
router.get('/:room_id/:name', function(req, res, next) {
  var room = req.params.room_id
  var name = req.params.name
  res.render("display",{
    room:room,
    name:name
  });
});

module.exports = router;
