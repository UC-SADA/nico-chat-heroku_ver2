var express = require('express');
var router = express.Router();
var app = require("../index");
var extend = require('util')._extend;
require('date-utils') //現在時刻の取得に必要

app.io.sockets.on('connection', function(socket) {
  socket.on('client_to_server_join', function(room) {
      socket.join(room);
  });
  router.get('/like/:room_id/:name', function (req, res) {
    const msg = extend({}, req.query);
    app.io.to(req.params.room_id).emit('like', msg);
    res.end();
  });
  router.get('/comment/:room_id/:name', function(req, res) {
    const msg = extend({}, req.query);
    app.io.to(req.params.room_id).emit('comment', msg);
    res.end()
  });
});

module.exports = router;
