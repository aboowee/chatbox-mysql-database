var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },

  post: function (req, res) {
    models.users.create(req.body, function (err, data) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
