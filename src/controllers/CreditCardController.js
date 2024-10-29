// src/controllers/CreditCardController.js
const CreditCard = require('../models/CreditCard');

// Controller class for managing credit card operations
class CreditCardController {
  // Method to create a new credit card
  static async createCreditCard(req, res) {
    try {
      const creditCard = await CreditCard.create(req.body);
      // Responding with a 201 status and the created credit card
      res.status(201).json(creditCard);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating credit card', error });
    }
  }

  // Method to retrieve all credit cards
  static async getCreditCards(req, res) {
    try {
      const creditCards = await CreditCard.getAll();
      // Responding with a 200 status and the list of credit cards
      res.status(200).json(creditCards);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving credit cards', error });
    }
  }

  // Method to retrieve a specific credit card by ID
  static async getCreditCardById(req, res) {
    try {
      const creditCard = await CreditCard.getById(req.params.id);
      if (!creditCard) {
        // If no credit card is found, respond with a 404 status
        return res.status(404).json({ message: 'Credit card not found' });
      }
      // Responding with a 200 status and the found credit card
      res.status(200).json(creditCard);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving credit card', error });
    }
  }

  // Method to update an existing credit card
  static async updateCreditCard(req, res) {
    try {
      const result = await CreditCard.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the credit card was not found
        return res.status(404).json({ message: 'Credit card not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Credit card updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating credit card', error });
    }
  }

  // Method to delete a credit card
  static async deleteCreditCard(req, res) {
    try {
      const result = await CreditCard.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the credit card was not found
        return res.status(404).json({ message: 'Credit card not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Credit card deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting credit card', error });
    }
  }
}

module.exports = CreditCardController;
