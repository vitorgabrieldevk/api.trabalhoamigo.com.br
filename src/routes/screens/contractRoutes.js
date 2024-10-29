// src/routes/ContractRoutes.js
const express = require('express');
const ContractController = require('../../controllers/ContractController');

const router = express.Router();

router.post('/', ContractController.createContract);
router.get('/', ContractController.getContracts);
router.get('/:id', ContractController.getContractById);
router.put('/:id', ContractController.updateContract);
router.delete('/:id', ContractController.deleteContract);

module.exports = router;
