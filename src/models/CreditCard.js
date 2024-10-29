// src/models/CreditCard.js
const db = require('../config/db');

const CreditCard = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO credit_cards (userId, cardNumber, expiryDate) VALUES (?, ?, ?)', 
      [data.userId, data.cardNumber, data.expiryDate]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM credit_cards');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM credit_cards WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE credit_cards SET userId = ?, cardNumber = ?, expiryDate = ? WHERE id = ?', 
      [data.userId, data.cardNumber, data.expiryDate, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM credit_cards WHERE id = ?', [id]);
    return result;
  }
};

module.exports = CreditCard;
