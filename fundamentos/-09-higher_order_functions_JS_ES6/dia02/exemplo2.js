// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }


const arrayBumbaMeuBoi = [0, 87, 90, 100, 'Paulo', true, 'Ana', 22.5, 101.09871, {nome: 'Oto', sobrenome: 'Silva', idade: 30}]

arrayBumbaMeuBoi.forEach((element) => {
    if (element % 2 === 0){
        console.log(element);
    }
});