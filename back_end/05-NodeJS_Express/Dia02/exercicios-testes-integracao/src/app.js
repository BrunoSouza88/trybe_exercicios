const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

const filePath = './src/cacauTrybe.json';

const readFile = async () => {
  const chocolates = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(chocolates);
};

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await readFile();
  return res.status(200).json(totalChocolates);
});

app.get('/chocolates/search', async (req, res) => {
  const totalChocolates = readFile();
});
module.exports = app;