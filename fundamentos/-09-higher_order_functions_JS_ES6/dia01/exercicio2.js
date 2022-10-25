// const randomNumber () => {};
// let numeroSorteado = Math.round(Math.random()*5);

const sorteio = (numero) => {
    let numeroSorteado = Math.round(Math.random()*5)
    if (numero === numeroSorteado){
        return 'Parabéns você ganhou!'
    } else {
        return 'Tente novamente'
    }
};

console.log(sorteio(5));