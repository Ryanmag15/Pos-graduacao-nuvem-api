const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  console.log('Recebida uma solicitação do frontend!');
  res.send('Olá do servidor Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});