import { nanoid } from 'nanoid'

const elementBtn = document.querySelector('button');

const elemenH2 = document.querySelector('h2');

elementBtn.addEventListener('click', () => {
 const randomPassword = nanoid()
 elemenH2.innerText = randomPassword;
})

console.log(elementBtn);