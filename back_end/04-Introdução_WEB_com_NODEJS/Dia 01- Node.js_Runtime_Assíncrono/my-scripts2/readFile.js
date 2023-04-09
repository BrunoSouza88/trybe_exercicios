const fs = require('fs').promises;

async function readFile() {

  const file = './simpsons.json';

  const readingFile = await fs.readFile(file, 'utf-8');
  const data = await JSON.parse(readingFile);
  console.log(data);
  return data;
};

readFile();

module.exports = {
  readFile,
};