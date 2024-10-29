// src/controllers/ProposalController.js
const Proposal = require('../models/Proposal');

// Controller class for managing proposal operations
class ProposalController {
  // Method to create a new proposal
  static async createProposal(req, res) {
    try {
      const proposal = await Proposal.create(req.body);
      // Responding with a 201 status and the created proposal
      res.status(201).json(proposal);
    } catch (error) {
      // Responding with a 500 status in case of error during creation
      res.status(500).json({ message: 'Error creating proposal', error });
    }
  }

  // Method to retrieve all proposals
  static async getProposals(req, res) {
    try {
      const proposals = await Proposal.getAll();
      // Responding with a 200 status and the list of proposals
      res.status(200).json(proposals);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving proposals', error });
    }
  }

  // Method to retrieve a specific proposal by ID
  static async getProposalById(req, res) {
    try {
      const proposal = await Proposal.getById(req.params.id);
      if (!proposal) {
        // If no proposal is found, respond with a 404 status
        return res.status(404).json({ message: 'Proposal not found' });
      }
      // Responding with a 200 status and the found proposal
      res.status(200).json(proposal);
    } catch (error) {
      // Responding with a 500 status in case of error during retrieval
      res.status(500).json({ message: 'Error retrieving proposal', error });
    }
  }

  // Method to update an existing proposal
  static async updateProposal(req, res) {
    try {
      const result = await Proposal.update(req.params.id, req.body);
      if (result.affectedRows === 0) {
        // If no rows are affected, the proposal was not found
        return res.status(404).json({ message: 'Proposal not found' });
      }
      // Responding with a 200 status indicating successful update
      res.status(200).json({ message: 'Proposal updated successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during update
      res.status(500).json({ message: 'Error updating proposal', error });
    }
  }

  // Method to delete a proposal
  static async deleteProposal(req, res) {
    try {
      const result = await Proposal.delete(req.params.id);
      if (result.affectedRows === 0) {
        // If no rows are affected, the proposal was not found
        return res.status(404).json({ message: 'Proposal not found' });
      }
      // Responding with a 200 status indicating successful deletion
      res.status(200).json({ message: 'Proposal deleted successfully' });
    } catch (error) {
      // Responding with a 500 status in case of error during deletion
      res.status(500).json({ message: 'Error deleting proposal', error });
    }
  }
}

module.exports = ProposalController;
