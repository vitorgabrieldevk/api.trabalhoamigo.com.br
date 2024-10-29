// src/models/User.js
const db = require('../config/db');

const User = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
      [data.name, data.email, data.password]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM users');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', 
      [data.name, data.email, data.password, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    return result;
  }
};

module.exports = User;
