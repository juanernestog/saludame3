require('dotenv').config(`dotenv`);
const express = require('express');
const app = express();
app.use(express.urlencoded());

app.get('/', function (req, res) {
  console.log('GET Request Received');
  res.send(`<form action="/hello" method="post">
  <label for="name"><input type="text" id="name" name="name">
  <button type="submit">Enviar</button>
</form>`);
});

app.post('/hello', (req, res) => {
  res.send(`<h1>Hola ${req.body.name}!</h1>`);
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`),
);
