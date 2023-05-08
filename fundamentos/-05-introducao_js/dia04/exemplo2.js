// for/in e for/f

let food = ['hamburguer', 'bife', 'acarajé'];


// uso do For/In
for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;

// uso do For/Of  
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;