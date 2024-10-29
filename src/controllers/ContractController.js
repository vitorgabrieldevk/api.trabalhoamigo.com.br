// src/controllers/ContractController.js
const Contract = require('../models/Contract');

class ContractController {
  static async createContract(req, res) {
    try {
      const contract = await Contract.create(req.body);
      res.status(201).json(contract);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar contrato', error });
    }
  }

  static async getContracts(req, res) {
    try {
      const contracts = await Contract.getAll();
      res.status(200).json(contracts);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter contratos', error });
    }
  }

  static async getContractById(req, res) {
    try {
      const contract = await Contract.getById(req.params.id);
      if (!contract) {
        return res.status(404).json({ message: 'Contrato não encontrado' });
      }
      res.status(200).json(contract);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter contrato', error });
    }
  }

  static async updateContract(req, res) {
    try {
      const result = await Contract.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Contrato não encontrado' });
      }
      res.status(200).json({ message: 'Contrato atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar contrato', error });
    }
  }

  static async deleteContract(req, res) {
    try {
      const result = await Contract.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Contrato não encontrado' });
      }
      res.status(200).json({ message: 'Contrato deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar contrato', error });
    }
  }
}

module.exports = ContractController;
