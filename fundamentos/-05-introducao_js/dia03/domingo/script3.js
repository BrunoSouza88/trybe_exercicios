let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let valMax = 0;

for (index = 0; index < numbers.length; index += 1) {

 if (valMax < numbers[index]) {
     valMax = numbers[index]
 }
}

console.log (valMax)