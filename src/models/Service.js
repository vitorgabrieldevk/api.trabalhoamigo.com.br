// src/models/Service.js
const db = require('../config/db');

const Service = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO services (name, description) VALUES (?, ?)', 
      [data.name, data.description]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM services');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM services WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE services SET name = ?, description = ? WHERE id = ?', 
      [data.name, data.description, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM services WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Service;
