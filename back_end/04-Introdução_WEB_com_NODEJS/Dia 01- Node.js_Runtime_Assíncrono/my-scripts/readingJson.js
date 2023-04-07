const fs = require('fs').promises;
const path = require('path');

// async function reading() {
// try {
//   const data = await fs.readFile(file);
//   const result = JSON.parse(data);
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// }

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const resultado = simpsons.find((element) => Number(element.id) === id);
  return resultado;
};

async function removeSimpson(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const resultado = simpsons.find((element) => Number(element.id) === id);
  if(resultado) {
    remove
  }
  return resultado;
};

async function finally1(id) {
  const chosenSimpson = await getSimpsonById(id);
  console.log(chosenSimpson);
  if(!chosenSimpson) {
    throw new Error('ID não existe');
  }
  return chosenSimpson;
}

finally1(4);
// reading();
