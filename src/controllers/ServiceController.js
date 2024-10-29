// src/controllers/ServiceController.js
const Service = require('../models/Service');

// Controller class for managing service operations
class ServiceController {
  // Method to create a new service
  static async createService(req, res) {
    try {
      const service = await Service.create(req.body);
      // Responding with a 201 status and the created service
      res.status(201).json(service);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating service', error });
    }
  }

  // Method to retrieve all services
  static async getServices(req, res) {
    try {
      const services = await Service.getAll();
      // Responding with a 200 status and the list of services
      res.status(200).json(services);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving services', error });
    }
  }

  // Method to retrieve a specific service by ID
  static async getServiceById(req, res) {
    try {
      const service = await Service.getById(req.params.id);
      if (!service) {
        // If no service is found, respond with a 404 status
        return res.status(404).json({ message: 'Service not found' });
      }
      // Responding with a 200 status and the found service
      res.status(200).json(service);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving service', error });
    }
  }

  // Method to update an existing service
  static async updateService(req, res) {
    try {
      const result = await Service.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the service was not found
        return res.status(404).json({ message: 'Service not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Service updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating service', error });
    }
  }

  // Method to delete a service
  static async deleteService(req, res) {
    try {
      const result = await Service.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the service was not found
        return res.status(404).json({ message: 'Service not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting service', error });
    }
  }
}

module.exports = ServiceController;
