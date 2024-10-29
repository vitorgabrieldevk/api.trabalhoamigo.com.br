// src/controllers/PixTransactionController.js
const PixTransaction = require('../models/PixTransaction');

// Controller class for managing Pix transaction operations
class PixTransactionController {
  // Method to create a new Pix transaction
  static async createPixTransaction(req, res) {
    try {
      const pixTransaction = await PixTransaction.create(req.body);
      // Responding with a 201 status and the created Pix transaction
      res.status(201).json(pixTransaction);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating Pix transaction', error });
    }
  }

  // Method to retrieve all Pix transactions
  static async getPixTransactions(req, res) {
    try {
      const pixTransactions = await PixTransaction.getAll();
      // Responding with a 200 status and the list of Pix transactions
      res.status(200).json(pixTransactions);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving Pix transactions', error });
    }
  }

  // Method to retrieve a specific Pix transaction by ID
  static async getPixTransactionById(req, res) {
    try {
      const pixTransaction = await PixTransaction.getById(req.params.id);
      if (!pixTransaction) {
        // If no transaction is found, respond with a 404 status
        return res.status(404).json({ message: 'Pix transaction not found' });
      }
      // Responding with a 200 status and the found Pix transaction
      res.status(200).json(pixTransaction);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving Pix transaction', error });
    }
  }

  // Method to update an existing Pix transaction
  static async updatePixTransaction(req, res) {
    try {
      const result = await PixTransaction.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the transaction was not found
        return res.status(404).json({ message: 'Pix transaction not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Pix transaction updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating Pix transaction', error });
    }
  }

  // Method to delete a Pix transaction
  static async deletePixTransaction(req, res) {
    try {
      const result = await PixTransaction.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the transaction was not found
        return res.status(404).json({ message: 'Pix transaction not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Pix transaction deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting Pix transaction', error });
    }
  }
}

module.exports = PixTransactionController;
