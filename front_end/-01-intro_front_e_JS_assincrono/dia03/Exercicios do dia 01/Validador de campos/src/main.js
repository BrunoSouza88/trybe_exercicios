import validator from "validator";

const button = document.getElementById('button-insert');

const input = document.getElementById('input-text');

const selection = document.getElementById('select-options');

const elementP = document.getElementById('answer')

button.addEventListener('click', (event) => {
  event.preventDefault()

  const menu = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    url: validator.isURL(input.value)
  }

 elementP.innerHTML = `A saída é: ${menu[selection.value]}`
})