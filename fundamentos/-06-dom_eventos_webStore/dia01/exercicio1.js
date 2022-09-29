
function mudarTexto() {
    let paragraph = document.getElementsByTagName("p")[1].innerHTML = "Capslock!"
}
mudarTexto();

function mudarQuadrado() {
    let quadrado = document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"
}
mudarQuadrado();

function mudarQudrado2() {
    let quadrado2 = document.getElementsByClassName("center-content")[0].style.backgroundColor = "white"
}
mudarQudrado2();

function consertarTexto() {
    let texto1 = document.getElementsByTagName("h1")[0].innerText = "Exercício - JavaScript"
}
consertarTexto();

function caixaAlta() {
    let caixaAlta = document.getElementsByTagName("p")[0].style.textTransform = "uppercase"
}
caixaAlta();

function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
    }
}
showParagraphs();