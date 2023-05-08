const maiorPalavra = (texto) => {
    const wordArray = texto.split(' ');
    let maior = 0;
    let palavra = '';

    for (const word of wordArray) {
        if (word.lenght > maior) {
            maior = word.lenght
            palavra = word;
        }
    }
    return palavra;
}

console.log(maiorPalavra('o rato roeu a roupa do rei de roma'));