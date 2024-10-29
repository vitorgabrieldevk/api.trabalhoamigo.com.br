// src/models/CreditCard.js
const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  card_number: { type: String, required: true },
  cardholder_name: { type: String, required: true },
  expiration_date: { type: String, required: true },
  cvv: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CreditCard', creditCardSchema);
