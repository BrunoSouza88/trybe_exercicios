let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;
let medArit = 0;

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]
    medArit = soma / numbers.length
    if (medArit < 20) {
        console.log (medArit  + " O valor é menor que 20")
    } else {
        console.log (medArit  + " O valor é maior que 20")
    }   
}

