// src/models/Message.js
const db = require('../config/db');

const Message = {
  async create(data) {
    const connection = await db();
    const [result] = await connection.execute('INSERT INTO messages (userId, content) VALUES (?, ?)', 
      [data.userId, data.content]);
    return result;
  },

  async getAll() {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM messages');
    return rows;
  },

  async getById(id) {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM messages WHERE id = ?', [id]);
    return rows[0];
  },

  async update(id, data) {
    const connection = await db();
    const [result] = await connection.execute('UPDATE messages SET userId = ?, content = ? WHERE id = ?', 
      [data.userId, data.content, id]);
    return result;
  },

  async delete(id) {
    const connection = await db();
    const [result] = await connection.execute('DELETE FROM messages WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Message;
