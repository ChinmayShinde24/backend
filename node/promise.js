import fs from 'fs/promises';

let a = await fs.readFile('hey.txt');
console.log(a.toString());
