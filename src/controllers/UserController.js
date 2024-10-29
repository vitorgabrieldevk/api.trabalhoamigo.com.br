// src/controllers/UserController.js
const User = require('../models/User');

class UserController {
  static async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await User.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter usuários', error });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.getById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter usuário', error });
    }
  }

  static async updateUser(req, res) {
    try {
      const result = await User.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
  }

  static async deleteUser(req, res) {
    try {
      const result = await User.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
  }
}

module.exports = UserController;
