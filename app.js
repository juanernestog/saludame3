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
  res.send('Hola ' + req.body.name);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
