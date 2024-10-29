// src/models/Transaction.js
const db = require('../config/db');

const Transaction = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO transactions (amount, senderId, receiverId) VALUES (?, ?, ?)', 
      [data.amount, data.senderId, data.receiverId]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM transactions');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM transactions WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE transactions SET amount = ?, senderId = ?, receiverId = ? WHERE id = ?', 
      [data.amount, data.senderId, data.receiverId, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM transactions WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Transaction;
