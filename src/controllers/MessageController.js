// src/controllers/MessageController.js
const Message = require('../models/Message');

// Controller class for managing message operations
class MessageController {
  // Method to create a new message
  static async createMessage(req, res) {
    try {
      const message = await Message.create(req.body);
      // Responding with a 201 status and the created message
      res.status(201).json(message);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating message', error });
    }
  }

  // Method to retrieve all messages
  static async getMessages(req, res) {
    try {
      const messages = await Message.getAll();
      // Responding with a 200 status and the list of messages
      res.status(200).json(messages);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving messages', error });
    }
  }

  // Method to retrieve a specific message by ID
  static async getMessageById(req, res) {
    try {
      const message = await Message.getById(req.params.id);
      if (!message) {
        // If no message is found, respond with a 404 status
        return res.status(404).json({ message: 'Message not found' });
      }
      // Responding with a 200 status and the found message
      res.status(200).json(message);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving message', error });
    }
  }

  // Method to update an existing message
  static async updateMessage(req, res) {
    try {
      const result = await Message.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the message was not found
        return res.status(404).json({ message: 'Message not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Message updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating message', error });
    }
  }

  // Method to delete a message
  static async deleteMessage(req, res) {
    try {
      const result = await Message.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the message was not found
        return res.status(404).json({ message: 'Message not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting message', error });
    }
  }
}

module.exports = MessageController;
