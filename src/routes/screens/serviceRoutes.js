// src/routes/ServiceRoutes.js
const express = require('express');
const ServiceController = require('../../controllers/ServiceController');

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/', ServiceController.getServices);
router.get('/:id', ServiceController.getServiceById);
router.put('/:id', ServiceController.updateService);
router.delete('/:id', ServiceController.deleteService);

module.exports = router;
