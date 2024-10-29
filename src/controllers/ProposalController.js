// src/controllers/ProposalController.js
const Proposal = require('../models/Proposal');

class ProposalController {
  static async createProposal(req, res) {
    try {
      const proposal = await Proposal.create(req.body);
      res.status(201).json(proposal);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar proposta', error });
    }
  }

  static async getProposals(req, res) {
    try {
      const proposals = await Proposal.getAll();
      res.status(200).json(proposals);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter propostas', error });
    }
  }

  static async getProposalById(req, res) {
    try {
      const proposal = await Proposal.getById(req.params.id);
      if (!proposal) {
        return res.status(404).json({ message: 'Proposta não encontrada' });
      }
      res.status(200).json(proposal);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter proposta', error });
    }
  }

  static async updateProposal(req, res) {
    try {
      const result = await Proposal.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Proposta não encontrada' });
      }
      res.status(200).json({ message: 'Proposta atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar proposta', error });
    }
  }

  static async deleteProposal(req, res) {
    try {
      const result = await Proposal.delete(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Proposta não encontrada' });
      }
      res.status(200).json({ message: 'Proposta deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar proposta', error });
    }
  }
}

module.exports = ProposalController;
