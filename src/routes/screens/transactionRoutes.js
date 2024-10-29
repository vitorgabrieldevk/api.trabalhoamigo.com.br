// src/routes/TransactionRoutes.js
const express = require('express');
const TransactionController = require('../../controllers/TransactionController');

const router = express.Router();

router.post('/', TransactionController.createTransaction);
router.get('/', TransactionController.getTransactions);
router.get('/:id', TransactionController.getTransactionById);
router.put('/:id', TransactionController.updateTransaction);
router.delete('/:id', TransactionController.deleteTransaction);

module.exports = router;
