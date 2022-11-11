const a1 = ['Capricórnio','Aquário', 'Peixes','Aries', 'Touro', 'Gemeos']
const a2 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']



const playingArrays = () => {
let resultado = a2.find((element) => element === 'Abril')
return resultado
}

console.log(playingArrays());