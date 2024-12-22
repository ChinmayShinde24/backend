const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('This is home');
});

app.get('/about', (req, res) => {
  res.send('This isabout');
});

app.get('/contact', (req, res) => {
  res.send('This is a contact');
});
// app.get('/:slug', (req, res) => {
//   res.send(`hello ${req.params.slug}`);
//   console.log(req.params);
// });

// app.get('/', (req, res) => {
//   res.sendFile('./index.html', { root: __dirname });
// });

// app.post('/items', (req, res) => {
//   // res.send('this is a POST req');
//   res.json({ x: 1, y: 2, z: 3 });
// });

// app.put('/items/:id', (req, res) => {
//   res.send('got PUT req');
// });

// app.delete('/items/:id', (req, res) => {
//   res.send('this is DELETE req');
// });

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
