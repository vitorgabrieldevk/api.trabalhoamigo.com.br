// src/routes/PixTransactionRoutes.js
const express = require('express');
const PixTransactionController = require('../../controllers/PixTransactionController');

const router = express.Router();

router.post('/', PixTransactionController.createPixTransaction);
router.get('/', PixTransactionController.getPixTransactions);
router.get('/:id', PixTransactionController.getPixTransactionById);
router.put('/:id', PixTransactionController.updatePixTransaction);
router.delete('/:id', PixTransactionController.deletePixTransaction);

module.exports = router;
