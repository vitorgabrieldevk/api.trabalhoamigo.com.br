// src/routes/index.js
const express = require('express');
const router = express.Router();

// Importa as rotas individuais
const userRoutes = require('./screens/userRoutes');
const proposalRoutes = require('./screens/proposalRoutes');
const addressRoutes = require('./screens/addressRoutes');
const categoryRoutes = require('./screens/categoryRoutes');
const contractRoutes = require('./screens/contractRoutes');
const creditCardRoutes = require('./screens/creditCardRoutes');
const messageRoutes = require('./screens/messageRoutes');
const pixTransactionRoutes = require('./screens/pixTransactionRoutes');
const serviceRoutes = require('./screens/serviceRoutes');
const transactionRoutes = require('./screens/transactionRoutes');

// Usando as rotas individuais
router.use('/users', userRoutes);
router.use('/proposals', proposalRoutes);
router.use('/addresses', addressRoutes);
router.use('/categories', categoryRoutes);
router.use('/contracts', contractRoutes);
router.use('/credit-cards', creditCardRoutes);
router.use('/messages', messageRoutes);
router.use('/pix-transactions', pixTransactionRoutes);
router.use('/services', serviceRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;
