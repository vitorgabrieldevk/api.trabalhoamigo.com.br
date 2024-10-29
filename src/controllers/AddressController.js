// src/controllers/AddressController.js

const Address = require('../models/Address');

// AddressController Class
// - Defines CRUD operations for managing address records
class AddressController {
  // Create a new address record in the database
  static async createAddress(req, res) {
    try {
      const address = await Address.create(req.body);
      res.status(201).json(address);
    } catch (error) {
      res.status(500).json({ message: 'Error creating address. Please check your request data.', error });
    }
  }

  // Retrieve all address records from the database
  static async getAddresses(req, res) {
    try {
      const addresses = await Address.getAll();
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving addresses. Please try again later.', error });
    }
  }

  // Retrieve a specific address by its ID
  static async getAddressById(req, res) {
    try {
      const address = await Address.getById(req.params.id);
      if (!address) {
        return res.status(404).json({ message: 'Address not found with the provided ID.' });
      }
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving the address. Please check the ID and try again.', error });
    }
  }

  // Update an address record by ID
  static async updateAddress(req, res) {
    try {
      const result = await Address.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Address not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Address updated successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating address. Ensure request data is valid and try again.', error });
    }
  }

  // Delete an address record by ID
  static async deleteAddress(req, res) {
    try {
      const result = await Address.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Address not found with the provided ID.' });
      }
      res.status(200).json({ message: 'Address deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting address. Please try again later.', error });
    }
  }
}

module.exports = AddressController;
