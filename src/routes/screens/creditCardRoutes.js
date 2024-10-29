// src/routes/CreditCardRoutes.js
const express = require('express');
const CreditCardController = require('../../controllers/CreditCardController');

const router = express.Router();

router.post('/', CreditCardController.createCreditCard);
router.get('/', CreditCardController.getCreditCards);
router.get('/:id', CreditCardController.getCreditCardById);
router.put('/:id', CreditCardController.updateCreditCard);
router.delete('/:id', CreditCardController.deleteCreditCard);

module.exports = router;
