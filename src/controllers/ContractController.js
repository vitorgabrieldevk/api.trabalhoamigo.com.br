// src/controllers/ContractController.js

const Contract = require('../models/Contract');

// ContractController Class
// - Manages CRUD operations for Contract resources
class ContractController {
  // Creates a new contract record
  static async createContract(req, res) {
    try {
      const contract = await Contract.create(req.body);
      res.status(201).json(contract);
    } catch (error) {
      res.status(500).json({ message: 'Error creating contract. Please check your input and try again.', error });
    }
  }

  // Retrieves all contract records from the database
  static async getContracts(req, res) {
    try {
      const contracts = await Contract.getAll();
      res.status(200).json(contracts);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving contracts. Please try again later.', error });
    }
  }

  // Retrieves a specific contract by ID
  static async getContractById(req, res) {
    try {
      const contract = await Contract.getById(req.params.id);
      if (!contract) {
        return res.status(404).json({ message: 'Contract not found with the provided ID.' });
      }
      res.status(200).json(contract);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving contract. Please verify the ID and try again.', error });
    }
  }

  // Updates an existing contract by ID
  static async updateContract(req, res) {
    try {
      const result = await Contract.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Contract not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Contract updated successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating contract. Ensure the request data is valid and try again.', error });
    }
  }

  // Deletes a contract record by ID
  static async deleteContract(req, res) {
    try {
      const result = await Contract.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Contract not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Contract deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting contract. Please try again later.', error });
    }
  }
}

module.exports = ContractController;
