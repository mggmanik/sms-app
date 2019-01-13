const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Contcat Model

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
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
