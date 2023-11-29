const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá do servidor Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
