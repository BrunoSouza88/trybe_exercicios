const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
let sortedNumbers = oddsAndEvens.sort((function(a, b){return a - b}))
return sortedNumbers
}

console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉