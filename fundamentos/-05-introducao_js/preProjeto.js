// Desenvolva uma função que soma todos os valores de um array

function functionSoma(array) {
    
    let resultado = 0;

    for (let index = 0; index < array.length; index += 1) {
        resultado += array[index];
    }
    return resultado; 
}


console.log (functionSoma([1, 2, 3, 4, 5]));


