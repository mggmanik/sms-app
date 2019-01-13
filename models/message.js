const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Message Model

const messageSchema = mongoose.Schema({
  OTP: {
    type: Number,
    required: true,
    unique: true
  },
  recipient: {
    type: mongoose.Schema.Types.Object,
    ref: 'Contact',
    required: true
  },
  date: {
    type: Date,
    required: true,
    unique: true
  }
});

messageSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Message', messageSchema);
