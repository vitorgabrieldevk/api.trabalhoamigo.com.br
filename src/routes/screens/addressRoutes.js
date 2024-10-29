// src/routes/AddressRoutes.js
const express = require('express');
const AddressController = require('../../controllers/AddressController');

const router = express.Router();

router.post('/', AddressController.createAddress);
router.get('/', AddressController.getAddresses);
router.get('/:id', AddressController.getAddressById);
router.put('/:id', AddressController.updateAddress);
router.delete('/:id', AddressController.deleteAddress);

module.exports = router;
