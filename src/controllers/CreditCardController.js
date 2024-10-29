// src/controllers/CreditCardController.js
const CreditCard = require('../models/CreditCard');

class CreditCardController {
  static async createCreditCard(req, res) {
    try {
      const creditCard = await CreditCard.create(req.body);
      res.status(201).json(creditCard);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar cartão de crédito', error });
    }
  }

  static async getCreditCards(req, res) {
    try {
      const creditCards = await CreditCard.getAll();
      res.status(200).json(creditCards);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter cartões de crédito', error });
    }
  }

  static async getCreditCardById(req, res) {
    try {
      const creditCard = await CreditCard.getById(req.params.id);
      if (!creditCard) {
        return res.status(404).json({ message: 'Cartão de crédito não encontrado' });
      }
      res.status(200).json(creditCard);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter cartão de crédito', error });
    }
  }

  static async updateCreditCard(req, res) {
    try {
      const result = await CreditCard.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Cartão de crédito não encontrado' });
      }
      res.status(200).json({ message: 'Cartão de crédito atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar cartão de crédito', error });
    }
  }

  static async deleteCreditCard(req, res) {
    try {
      const result = await CreditCard.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Cartão de crédito não encontrado' });
      }
      res.status(200).json({ message: 'Cartão de crédito deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar cartão de crédito', error });
    }
  }
}

module.exports = CreditCardController;
