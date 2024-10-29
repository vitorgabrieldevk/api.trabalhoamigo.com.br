// src/models/Proposal.js
const db = require('../config/db');

const Proposal = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO proposals (userId, description, amount) VALUES (?, ?, ?)', 
      [data.userId, data.description, data.amount]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM proposals');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM proposals WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE proposals SET userId = ?, description = ?, amount = ? WHERE id = ?', 
      [data.userId, data.description, data.amount, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM proposals WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Proposal;
