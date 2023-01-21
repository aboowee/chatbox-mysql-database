var models = require('../models');



module.exports = {
  get: function (req, res) {
    //Invoke models.getall
    models.messages.getAll((err, data) => {
      if (err) {
        res.send('No messages');
      } else {
        console.log('This is results from MESSAGES Model: ', data);
        res.send(JSON.stringify(data));
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //Invoke models.create
    models.messages.create(req.body, function (err, data) {
      if (err) {
        console.log('error: ', err);
        res.send('Did not create message');
      } else {
        console.log(data);
        res.send('Message Sent');
      }
    });
  } // a function which handles posting a message to the database
};

