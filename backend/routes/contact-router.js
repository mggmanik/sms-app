const express = require('express');
const ContactController = require('../controllers/contact-controller');
const router = express.Router();

router.post('', ContactController.createContact);
router.get('', ContactController.getContacts);
router.get('/:id', ContactController.getContact);

module.exports = router;
