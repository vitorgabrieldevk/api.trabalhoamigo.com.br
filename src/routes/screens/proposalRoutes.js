// src/routes/ProposalRoutes.js
const express = require('express');
const ProposalController = require('../../controllers/ProposalController');

const router = express.Router();

router.post('/', ProposalController.createProposal);
router.get('/', ProposalController.getProposals);
router.get('/:id', ProposalController.getProposalById);
router.put('/:id', ProposalController.updateProposal);
router.delete('/:id', ProposalController.deleteProposal);

module.exports = router;
