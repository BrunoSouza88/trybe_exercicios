// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let num25 = [];

for (index = 1; index <= 25; index += 1) {
    num25.push(index)
}

// console.log (num25)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let divisao = 0

for (index = 0; index < num25.length; index +=1) {
     divisao = (num25[index]/2)
     console.log (divisao)
}

