const Contact = require('../models/contact');

// handler methods for CRUD on Contacts

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
      message: 'Creation of contact failed!'
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

exports.deleteContact = (req, res) => {
  Contact.deleteOne({_id: req.params.id}).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Contact Deleted!'
      });
    } else {
      res.status(401).json({
        message: 'Not Authorized!'
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: 'Contact Not Found!'
    });
  });
};
