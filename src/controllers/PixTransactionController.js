// src/controllers/PixTransactionController.js
const PixTransaction = require('../models/PixTransaction');

class PixTransactionController {
  static async createPixTransaction(req, res) {
    try {
      const pixTransaction = await PixTransaction.create(req.body);
      res.status(201).json(pixTransaction);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar transação Pix', error });
    }
  }

  static async getPixTransactions(req, res) {
    try {
      const pixTransactions = await PixTransaction.getAll();
      res.status(200).json(pixTransactions);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter transações Pix', error });
    }
  }

  static async getPixTransactionById(req, res) {
    try {
      const pixTransaction = await PixTransaction.getById(req.params.id);
      if (!pixTransaction) {
        return res.status(404).json({ message: 'Transação Pix não encontrada' });
      }
      res.status(200).json(pixTransaction);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter transação Pix', error });
    }
  }

  static async updatePixTransaction(req, res) {
    try {
      const result = await PixTransaction.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Transação Pix não encontrada' });
      }
      res.status(200).json({ message: 'Transação Pix atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar transação Pix', error });
    }
  }

  static async deletePixTransaction(req, res) {
    try {
      const result = await PixTransaction.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Transação Pix não encontrada' });
      }
      res.status(200).json({ message: 'Transação Pix deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar transação Pix', error });
    }
  }
}

module.exports = PixTransactionController;
