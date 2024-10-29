// src/models/Address.js
const db = require('../config/db');

const Address = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO addresses (street, city, state, zip) VALUES (?, ?, ?, ?)', 
      [data.street, data.city, data.state, data.zip]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM addresses');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM addresses WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE addresses SET street = ?, city = ?, state = ?, zip = ? WHERE id = ?', 
      [data.street, data.city, data.state, data.zip, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM addresses WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Address;
