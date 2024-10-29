// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  mobile: { type: String },
  whatsapp: { type: String },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totp_secret: { type: String, required: true },
  totp_enabled: { type: Boolean, default: false },
  cpf: { type: String },
  created_at: { type: Date, default: Date.now },
  user_type: { type: String, enum: ['admin', 'contractor', 'advertiser'], required: true },
  unique_id: { type: String, required: true, unique: true },
  profile_image: { type: String },
  is_active: { type: Boolean, default: true },
  deleted_at: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
