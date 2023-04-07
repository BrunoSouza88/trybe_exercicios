const fs = require('fs').promises;

const meuArquivo = './meu-arquivo.txt';

const func = async (param = meuArquivo) => {
  try {
    await fs.writeFile(param, '!!acho que foi!1');
    const data = await fs.readFile(meuArquivo, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(`Esse é o erro: ${error}`);
  }
};

func();