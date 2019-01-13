const expess = require('express');
const MessageController = require('../controllers/message-controller');
const router = expess.Router();

router.post('', MessageController.addMessage);
router.get('', MessageController.getMessages);
router.delete('/:id', MessageController.deleteMessage);

module.exports = router;
