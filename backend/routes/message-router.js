const expess = require('express');
const MessageController = require('../controllers/message-controller');
const router = expess.Router();

router.post('', MessageController.addMessage);

module.exports = router;
