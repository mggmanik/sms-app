const expess = require('express');
const MessageController = require('../controllers/message-controller');
const router = expess.Router();

router.post('', MessageController.addMessage);
router.get('', MessageController.getMessages);

module.exports = router;
