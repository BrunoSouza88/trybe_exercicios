const readline = require('readline-sync');

function IMC(peso, altura) {
  console.log( peso / altura ** 2);
  return peso / altura **2;
}

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const IMCFinal = IMC(peso, altura);

if (IMCFinal < 18.5) {
  console.log('Abaixo do peso (magreza)');
  return;
}
if (IMCFinal >= 18.5 && IMCFinal <= 24.9) {
  console.log('Peso normal');
  return;
}
if (IMCFinal >= 25 && IMCFinal <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
  return;
}
if (IMCFinal >= 30 && IMCFinal <= 34.9) {
  console.log('Obesidade grau I');
  return;
}
if (IMCFinal >= 35 && IMCFinal <= 39.9) {
  console.log('Obesidade grau II');
  return;
}

console.log('Status: Obesity grades III and IV');

module.exports = IMC;