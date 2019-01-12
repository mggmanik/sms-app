const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true,
    unique: true
  }
});

contactSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Contact', contactSchema);
