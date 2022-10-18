// const verifiqueSeNumero = (valorA, valorB) => {
//     if (typeof valorA !== 'number' || typeof valorB !== 'number'){
//         throw new Error ('Valor(es) não numérico(s)')
//     }
// }


// const soma = (valorA, valorB) => {
//     try {
//         verifiqueSeNumero(valorA, valorB)
//         return valorA + valorB;
//     }
//     catch (erro) {
//         return erro.message;
//     }
// }



// console.log(soma(10,'20'))

//#--------------------------------------------------------

// const verficarNumeros = (valor1, valor2) => {
//     if (typeof valor1 !== 'number' || typeof valor2 !== 'number'){
//             throw new Error ('Valor(es) não numérico(s)')
//     }
// }

// let soma = (valor1, valor2) => {
//     try {
//         verficarNumeros(valor1, valor2);
//         return valor1 + valor2;
//     }
//     catch (erro) {
//        return erro.message
//     }
// }

// console.log(soma("10",20))

//#--------------------------------------------------------

// const vefiqueNumero = (valor1, valor2) => {
//     if (typeof valor1 !== 'number' || typeof valor2 !== 'number'){
//         throw new Error ('Valor(es) não numérico(s)')
//     }
// }

// const soma = (valor1, valor2) => {
//     try {
//         vefiqueNumero(valor1, valor2);
//         return valor1 + valor2;
//     }
//     catch (erro) {
//         return erro.message;
//     }
// }

// console.log(soma('30',40));

//#--------------------------------------------------------

const verifyNumber = (valorA, valorB) => {
    if (typeof valorA !== 'number' || typeof valorB !== 'number'){
        throw new Error ('Valor(es) não numérico(s)')
    }
}

const soma = (valorA, valorB) => {
    try {
        verifyNumber(valorA, valorB)
            return valorA + valorB;
        }
        catch (erro) {
            return erro.message;
        }
    }


console.log(soma(2,"4"));