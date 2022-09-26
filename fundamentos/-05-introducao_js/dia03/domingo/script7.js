// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultado = fatorial;
for (let index = 1; index < fatorial; index += 1) {
    resultado *= index;
}
console.log(resultado);