
let resultado = 1;
let factorial = (number) => {
    for (let index = 2; index <= number; index += 1) {

        resultado *= index
    }
    return resultado
}
const print = factorial(17)
console.log(`O valor do fatorial é: ${print}`);