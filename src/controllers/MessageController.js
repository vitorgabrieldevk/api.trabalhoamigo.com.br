// src/controllers/MessageController.js
const Message = require('../models/Message');

class MessageController {
  static async createMessage(req, res) {
    try {
      const message = await Message.create(req.body);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar mensagem', error });
    }
  }

  static async getMessages(req, res) {
    try {
      const messages = await Message.getAll();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter mensagens', error });
    }
  }

  static async getMessageById(req, res) {
    try {
      const message = await Message.getById(req.params.id);
      if (!message) {
        return res.status(404).json({ message: 'Mensagem não encontrada' });
      }
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter mensagem', error });
    }
  }

  static async updateMessage(req, res) {
    try {
      const result = await Message.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Mensagem não encontrada' });
      }
      res.status(200).json({ message: 'Mensagem atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar mensagem', error });
    }
  }

  static async deleteMessage(req, res) {
    try {
      const result = await Message.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Mensagem não encontrada' });
      }
      res.status(200).json({ message: 'Mensagem deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar mensagem', error });
    }
  }
}

module.exports = MessageController;
