// src/controllers/ServiceController.js
const Service = require('../models/Service');

class ServiceController {
  static async createService(req, res) {
    try {
      const service = await Service.create(req.body);
      res.status(201).json(service);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar serviço', error });
    }
  }

  static async getServices(req, res) {
    try {
      const services = await Service.getAll();
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter serviços', error });
    }
  }

  static async getServiceById(req, res) {
    try {
      const service = await Service.getById(req.params.id);
      if (!service) {
        return res.status(404).json({ message: 'Serviço não encontrado' });
      }
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter serviço', error });
    }
  }

  static async updateService(req, res) {
    try {
      const result = await Service.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Serviço não encontrado' });
      }
      res.status(200).json({ message: 'Serviço atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar serviço', error });
    }
  }

  static async deleteService(req, res) {
    try {
      const result = await Service.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Serviço não encontrado' });
      }
      res.status(200).json({ message: 'Serviço deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar serviço', error });
    }
  }
}

module.exports = ServiceController;
