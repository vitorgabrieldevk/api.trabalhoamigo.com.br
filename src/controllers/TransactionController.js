// src/controllers/TransactionController.js
const Transaction = require('../models/Transaction');

// Controller class for managing transaction operations
class TransactionController {
  // Method to create a new transaction
  static async createTransaction(req, res) {
    try {
      const transaction = await Transaction.create(req.body);
      // Responding with a 201 status and the created transaction
      res.status(201).json(transaction);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating transaction', error });
    }
  }

  // Method to retrieve all transactions
  static async getTransactions(req, res) {
    try {
      const transactions = await Transaction.getAll();
      // Responding with a 200 status and the list of transactions
      res.status(200).json(transactions);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving transactions', error });
    }
  }

  // Method to retrieve a specific transaction by ID
  static async getTransactionById(req, res) {
    try {
      const transaction = await Transaction.getById(req.params.id);
      if (!transaction) {
        // If no transaction is found, respond with a 404 status
        return res.status(404).json({ message: 'Transaction not found' });
      }
      // Responding with a 200 status and the found transaction
      res.status(200).json(transaction);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving transaction', error });
    }
  }

  // Method to update an existing transaction
  static async updateTransaction(req, res) {
    try {
      const result = await Transaction.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the transaction was not found
        return res.status(404).json({ message: 'Transaction not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Transaction updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating transaction', error });
    }
  }

  // Method to delete a transaction
  static async deleteTransaction(req, res) {
    try {
      const result = await Transaction.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the transaction was not found
        return res.status(404).json({ message: 'Transaction not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting transaction', error });
    }
  }
}

module.exports = TransactionController;
