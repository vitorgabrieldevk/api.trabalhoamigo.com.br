// src/controllers/AddressController.js
const Address = require('../models/Address');

class AddressController {
  static async createAddress(req, res) {
    try {
      const address = await Address.create(req.body);
      res.status(201).json(address);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar endereço', error });
    }
  }

  static async getAddresses(req, res) {
    try {
      const addresses = await Address.getAll();
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter endereços', error });
    }
  }

  static async getAddressById(req, res) {
    try {
      const address = await Address.getById(req.params.id);
      if (!address) {
        return res.status(404).json({ message: 'Endereço não encontrado' });
      }
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter endereço', error });
    }
  }

  static async updateAddress(req, res) {
    try {
      const result = await Address.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Endereço não encontrado' });
      }
      res.status(200).json({ message: 'Endereço atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar endereço', error });
    }
  }

  static async deleteAddress(req, res) {
    try {
      const result = await Address.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Endereço não encontrado' });
      }
      res.status(200).json({ message: 'Endereço deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar endereço', error });
    }
  }
}

module.exports = AddressController;
