var models = require('../models');



module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(JSON.stringify(data));
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = {textMessage: req.body.message, roomName: req.body.roomname, userName: req.body.username};
    models.messages.create(params, function (err, data) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};

