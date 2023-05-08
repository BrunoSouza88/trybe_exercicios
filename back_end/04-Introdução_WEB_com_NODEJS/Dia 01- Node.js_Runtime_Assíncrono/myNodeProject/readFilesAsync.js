const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';


  try {
    fs.promises.readFile(nomeDoArquivo, 'utf8')
      .then((data) => console.log(data));
  } catch (error) {
    console.log(`Seu erro foi ${error}`)
  }
