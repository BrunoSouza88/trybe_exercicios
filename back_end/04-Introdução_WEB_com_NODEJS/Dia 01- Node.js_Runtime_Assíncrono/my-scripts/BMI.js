const readline = require('readline-sync');

const { BMI } = require('./helper');

const weight = readline.questionFloat(`What's your weight? ` );
const height = readline.questionFloat(`What's your height? `);

const ResultBMI = BMI(weight, height);

if (ResultBMI < 18.5) {
  console.log('Status: Underweight (thin)');
  return;
}

if (ResultBMI >= 18.5 && ResultBMI < 25) {
  console.log('Status: Normal weight');
  return;
}

if (ResultBMI >= 25 && ResultBMI < 30) {
  console.log('Status: Overweight');
  return;
}

if (ResultBMI >= 30 && ResultBMI < 35) {
  console.log('Status: Grade I obesity');
  return;
}

if (ResultBMI >= 35 && ResultBMI < 40) {
  console.log('Status: Grade II obesity');
  return;
}

console.log('Status: Obesity grades III and IV');
// ...