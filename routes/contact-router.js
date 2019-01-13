const express = require('express');
const ContactController = require('../controllers/contact-controller');
const router = express.Router();

// Contact Router: Routes Requests to ContactController

router.post('', ContactController.createContact);
router.get('', ContactController.getContacts);
router.get('/:id', ContactController.getContact);
router.delete('/:id', ContactController.deleteContact);

module.exports = router;
