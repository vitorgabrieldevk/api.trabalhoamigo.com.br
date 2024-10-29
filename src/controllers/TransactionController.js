// src/controllers/TransactionController.js
const Transaction = require('../models/Transaction');

class TransactionController {
  static async createTransaction(req, res) {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar transação', error });
    }
  }

  static async getTransactions(req, res) {
    try {
      const transactions = await Transaction.getAll();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter transações', error });
    }
  }

  static async getTransactionById(req, res) {
    try {
      const transaction = await Transaction.getById(req.params.id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transação não encontrada' });
      }
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter transação', error });
    }
  }

  static async updateTransaction(req, res) {
    try {
      const result = await Transaction.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Transação não encontrada' });
      }
      res.status(200).json({ message: 'Transação atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar transação', error });
    }
  }

  static async deleteTransaction(req, res) {
    try {
      const result = await Transaction.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Transação não encontrada' });
      }
      res.status(200).json({ message: 'Transação deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar transação', error });
    }
  }
}

module.exports = TransactionController;
