const express = require('express');
const app = express();

let todos = [];

app.use(express.json());

app.get('/fetch', (req, res) => {
  res.send(todos);
});

app.post('/save', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.send(todos);
});

app.delete('/delete/:id', (req, res) => {
  id = req.params.id;

  todos = todos.filter((t) => {
    return t.id != id;
  });
  res.send(todos);
});

app.listen(3000);
