var models = require('../models');

module.exports = {
  get: function (req, res) {
    //Invoke models.getall
    models.users.getAll((err, data) => {
      if (err) {
        res.send('No users');
      } else {
        console.log('This is results from Users Model: ', data);
        res.send(JSON.stringify(data));
      }
    });
  },

  post: function (req, res) {
    models.users.create(req.body, function (err, data) {
      if (err) {
        console.log('error: ', err);
        res.send('Can\'t create user');
      } else {
        console.log(data);
        res.send('User Created');
      }
    });
  }
};
