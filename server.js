// src/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db'); // Corrija a importação
const routes = require('./src/routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

(async () => {
  try {
    await connectDB(); // Chama a função de conexão
  } catch (error) {
    console.error('Falha na conexão com o banco de dados:', error);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
})();

// Usando as rotas
app.use('/api', routes);

app.get('/', (req, res) => res.send("It's Work"));

app.listen(PORT, () => {
  console.log(`Runner Server: ${PORT}`);
});
