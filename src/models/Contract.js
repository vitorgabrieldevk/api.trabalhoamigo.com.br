// src/models/Contract.js
const db = require('../config/db');

const Contract = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO contracts (userId, details) VALUES (?, ?)', 
      [data.userId, data.details]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM contracts');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM contracts WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE contracts SET userId = ?, details = ? WHERE id = ?', 
      [data.userId, data.details, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM contracts WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Contract;
