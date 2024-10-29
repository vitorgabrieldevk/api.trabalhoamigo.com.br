// src/models/Category.js
const db = require('../config/db');

const Category = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO categories (name) VALUES (?)', [data.name]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM categories');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE categories SET name = ? WHERE id = ?', [data.name, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM categories WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Category;
