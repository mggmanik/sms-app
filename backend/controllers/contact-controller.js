const Contact = require('../models/contact');

exports.createContact = (req, res) => {
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date
  });

  contact.save()
    .then(() => {
      res.status(201).json({
        message: 'Contact Added Successfully!'
      });
    }).catch(err => {
    res.status(500).json({
      message: 'Creation of contact failed'
    });
  });
};

exports.getContacts = (req, res) => {
  Contact.find().then((docs) => {
    res.status(200).json({
      contacts: docs,
      message: 'Contacts fetched Successfully!'
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Fetching Contacts Failed!'
    });
  });
};

exports.getContact = (req, res) => {
  Contact.findById(req.params.id).then((doc) => {
    res.status(200).json({
      contact: doc,
      message: 'Contact fetched Successfully!'
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Fetching Contact Failed!'
    });
  });
};
