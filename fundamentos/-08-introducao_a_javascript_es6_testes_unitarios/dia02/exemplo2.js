// // const customer = {
// //     firstName: 'Roberto',
// //     age: 22,
// //     job: 'Teacher',
// //   };

// //   console.log(customer);

// //   customer.lastName = 'Farias'; // Entrega novos chaves e valores ao objeto

// // //  console.log(Object.keys(customer)); // Pega as chaves do objeto
// // //  console.log(Object.values(customer)); // Pega os valores das chaves do objeto
// // //  console.log(Object.entries(customer)); // Pega valores e chaves do objeto

// // console.log(customer);

// // customer.firstName = 'Fernando' // Altera o valor de uma propriedade já existente

// // console.log(customer);

// //#--------------------------------------------------------

// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
//   for (const property in coolestTvShow) {
//    // console.log(property);
//   }

//   console.log(Object.entries(coolestTvShow)[0][2]);

// //#--------------------------------------------------------


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };

  const student3 = Object.assign({},student2);
  student3.Python = 'Ótimo';

  console.log(Object.entries(student3));
  
