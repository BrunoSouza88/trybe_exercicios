const numbers = [19, 21, 30, 3, 45, 22, 15];

const odd = numbers.filter((number) => number % 2 !==0)
const even = numbers.filter((number) => !(number % 2 !==0))

console.log(odd)
console.log(even)
console.log(numbers.length);

