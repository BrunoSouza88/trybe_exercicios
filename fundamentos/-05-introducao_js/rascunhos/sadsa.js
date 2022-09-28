let phrase = "Dois numeros 8. Sao iguais a um 16 que no final sao 1 e 6."
  
let reg = /\d+/g;

let result = phrase.match(reg);
  
console.log(result[3])