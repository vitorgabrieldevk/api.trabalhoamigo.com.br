// src/controllers/UserController.js
const User = require('../models/User');

// Controller class for managing user operations
class UserController {
  // Method to create a new user
  static async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      // Responding with a 201 status and the created user
      res.status(201).json(user);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating user', error });
    }
  }

  // Method to retrieve all users
  static async getUsers(req, res) {
    try {
      const users = await User.getAll();
      // Responding with a 200 status and the list of users
      res.status(200).json(users);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving users', error });
    }
  }

  // Method to retrieve a specific user by ID
  static async getUserById(req, res) {
    try {
      const user = await User.getById(req.params.id);
      if (!user) {
        // If no user is found, respond with a 404 status
        return res.status(404).json({ message: 'User not found' });
      }
      // Responding with a 200 status and the found user
      res.status(200).json(user);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving user', error });
    }
  }

  // Method to update an existing user
  static async updateUser(req, res) {
    try {
      const result = await User.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the user was not found
        return res.status(404).json({ message: 'User not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating user', error });
    }
  }

  // Method to delete a user
  static async deleteUser(req, res) {
    try {
      const result = await User.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the user was not found
        return res.status(404).json({ message: 'User not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting user', error });
    }
  }
}

module.exports = UserController;
