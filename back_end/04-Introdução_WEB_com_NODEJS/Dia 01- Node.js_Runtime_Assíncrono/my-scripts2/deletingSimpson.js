const fs = require('fs').promises;
const path = require('path');

// async function deleteSimpson() {

//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const result = simpsons.filter((element) => element.id !== '6' && element.id !== '10');
//   await fs.writeFile('./simpsons.json', JSON.stringify(result));
// };

// deleteSimpson();

// async function changeAllJson() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);

//   const result = simpsons
//     .filter((element) => element.id !== '5' 
//       && element.id !== '6' 
//       && element.id !== '7' 
//       && element.id !== '8' 
//       && element.id !== '9' 
//       && element.id !== '10'
//     );

//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
// }

// changeAllJson();

async function AddNelson() {

  const simpsonFile = ('./simpsonFamily.json');
  const result = await fs.readFile(simpsonFile, 'utf-8');
  const logo = JSON.parse(result);
  console.log( typeof result);
  // logo.push({ id: '8', name: 'Nelson Muntz' });
  // await fs.writeFile(simpsonFile, JSON.stringify(logo))
};

AddNelson();