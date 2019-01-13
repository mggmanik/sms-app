const Message = require('../models/message');
const key = require('../config');

const accountSid = key.t_key.ACCOUNT_SID;
const authToken = key.t_key.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// handler methods for CRUD on Messages and twilio(third party library) for sending messages

exports.addMessage = (req, res) => {
  const message = new Message({
    OTP: req.body.OTP,
    recipient: req.body.recipient,
    date: req.body.date
  });

  message.save().then((doc) => {
    client.messages
      .create({
        body: `Hi. Your OTP is: ${doc.OTP}`,
        from: key.t_key.FROM_NUMBER,
        to: `+91${doc.recipient.phoneNumber}`
      })
      .then(message => console.log(message.sid))
      .catch(err => {
        res.status(500).json({
          message: 'Not Able to Send Message!'
        });
      }).done();

    res.status(201).json({
      message: 'Message Added Successfully!'
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Not Able to add Message!'
    });
  });
};

exports.getMessages = (req, res) => {
  Message.find().then(docs => {
    res.status(200).json({
      messages: docs,
      message: 'Messages fetched successfully!'
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Messages Not Fetched!'
    });
  });
};

exports.deleteMessage = (req, res) => {
  Message.deleteOne({_id: req.params.id}).then((result) => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Message Deleted Successfully!'
      });
    } else {
      res.status(401).json({
        message: 'Not Authorized!'
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: 'Not Able to Delete Message!'
    });
  });
};
