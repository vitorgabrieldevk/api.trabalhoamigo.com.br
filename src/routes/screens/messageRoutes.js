// src/routes/MessageRoutes.js
const express = require('express');
const MessageController = require('../../controllers/MessageController');

const router = express.Router();

router.post('/', MessageController.createMessage);
router.get('/', MessageController.getMessages);
router.get('/:id', MessageController.getMessageById);
router.put('/:id', MessageController.updateMessage);
router.delete('/:id', MessageController.deleteMessage);

module.exports = router;
