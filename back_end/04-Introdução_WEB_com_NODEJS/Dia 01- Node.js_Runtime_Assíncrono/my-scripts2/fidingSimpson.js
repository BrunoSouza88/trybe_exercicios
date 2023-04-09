const fs = require('fs').promises;

async function find(id) {
  const algo = await fs.readFile('./simpsons.json', 'utf-8');
  const algo2 = JSON.parse(algo);

  const response = algo2.find((element) => Number (element.id) !== id)
  
  if(!response) {
    console.log(`${id} não existe`);
  } else {
    console.log(response);
  }
}

find(6);

module.exports = {
  find
}
