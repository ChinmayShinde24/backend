// module.exports = {
//   a: 1,
//   b: 2,
// };

// let c = 56;
// module.exports = c;

// const fs = require('fs');
// import fs from 'fs';

// fs.writeFile('hey.txt', 'hello world', (err) => {
//   if (err) console.error(err);
//   else console.log('done');
// });

// fs.appendFile('hey.txt', ' My name is chinmay', (err) => {
//   if (err) console.log(err);
//   else 'done';
// });

// fs.rename('hey.txt', 'hello.txt', (err) => {
//   if (err) console.log(err);
//   else 'done';
// });

// fs.unlink('hello.txt', (err) => {
//   if (err) console.log(err);
//   else 'done';
// });

// const { error } = require('console');
// const { error } = require('console');
// const fs = require('fs');
import fs from 'fs';

fs.writeFile('ok.txt', 'hello world', (err) => {
  if (err) throw err;
  else console.log('done');
});

// fs.writeFile('name.txt', 'hello world', (err) => {
//   if (err) throw err;
//   else 'done';
// });

// fs.appendFile('name.txt', ' my name is chinmay', (err) => {
//   if (err) throw error;
//   else console.log('done');
// });

// fs.rename('name.txt', 'game.txt', (err) => {
//   if (err) throw error;
//   else console.log('done');
// });

// fs.unlink('game.txt', (err) => {
//   if (err) throw error;
//   else console.log('done');
// });
