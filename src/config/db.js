// src/config/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error; // Propaga o erro para que seja tratado onde for chamado
  }
};

module.exports = connectDB;
