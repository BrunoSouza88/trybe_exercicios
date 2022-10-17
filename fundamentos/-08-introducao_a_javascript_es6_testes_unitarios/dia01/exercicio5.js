let buttonClick = document.getElementById('btn-click');
let clickCount = 0;
let textToDisplay = document.getElementById('click-counter');

buttonClick.addEventListener('click', () => textToDisplay.innerText = clickCount += 1);

