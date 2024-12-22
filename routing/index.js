const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world 8522');
});
app.post('/', (req, res) => {
  console.log('its a post req');
  res.send('Chinmay here');
});
app.put('/', (req, res) => {
  console.log('its a put req');
  res.send('Chinmay here');
});

app.get('/', (req, res) => {
  console.log('its index page');
  res.sendFile('templets/index.html', { root: '__dirname' });
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
