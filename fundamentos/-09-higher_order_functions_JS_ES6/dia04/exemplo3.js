const numbers = [50, 85, -30, 3, 15];
const number2 =  [1, 2, 3]

const pares = () => numbers
.filter((number) => number % 2 === 0)
.reduce((acc,cur) => acc + cur);

const impares = () => numbers
.filter((number) => number % 2 !== 0)
.reduce((acc, cur) => acc + cur)


console.log(`Os valores da soma dos números pares são: ${pares()}`);
console.log(`Os valores da soma dos números impares são: ${impares()}`);

const concat = () => {
    return numbers.concat(number2)
}

console.log(concat(numbers));