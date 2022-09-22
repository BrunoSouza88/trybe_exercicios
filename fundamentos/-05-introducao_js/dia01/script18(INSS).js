let salarioBruto = 20000;


if (salarioBruto < 1556,94) {
  aliqINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliqINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliqINSS = salarioBruto * 0.11;
} else {
  aliqINSS = 570.88;
}

let salarioBase = salarioBruto - aliqINSS;

if (salarioBase <= 1903.98) {
  aliqIR = 0
} else if (salarioBase <= 2826.65) {
  aliqIR = (salarioBase * 0.076) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliqIR = (salarioBase * 0.15) - 354.80;  
} else if (salarioBase <= 4.664,68) {
  aliqIR = (salarioBase * 0.225) - 636.13;
} else {
  aliqIR = (salarioBase * 0.275) - 869.36
}

console.log("Salário liquido é de: " + (salarioBase - aliqIR))