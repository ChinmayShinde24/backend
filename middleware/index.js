const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('hello world');
});

app.listen(3000);
