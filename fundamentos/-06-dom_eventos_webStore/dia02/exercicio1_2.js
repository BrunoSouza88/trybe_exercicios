let elementh1_1 = document.createElement('h1');
elementh1_1.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(elementh1_1);

let elementMain = document.createElement('Main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

let elementSection1 = document.createElement('Section');
elementSection1.className = 'center-content';
elementMain.appendChild(elementSection1);

let elementP_1 = document.createElement('p');
elementSection1.appendChild(elementP_1);
elementP_1.innerText = 'Esse texto é texte da segunda vez que faço o exercicio. Dessa vez sem usar o gabarito. Desejem-me sorte!'

let elementSection2 = document.createElement('Section');
elementSection2.className = 'left-content';
elementMain.appendChild(elementSection2);

let elementSection3 = document.createElement('Section');
elementSection3.className = 'right-content';
elementMain.appendChild(elementSection3);

let elementImg = document.createElement('img');
elementImg.src="https://picsum.photos/200";
elementImg.alt="small-image";
elementImg.className = 'small-image';
elementSection2.appendChild(elementImg);

let elementUl_1 = document.createElement('ul');
elementSection3.appendChild(elementUl_1);

let umADez = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < umADez.length; index += 1) {
    let elementLi_1 = document.createElement('li')
    elementLi_1.innerText = umADez[index];
    elementUl_1.appendChild(elementLi_1);
}

for (index = 0; index < 3; index +=1) {
    let elementH3_1 = document.createElement('h3');
    elementMain.appendChild(elementH3_1);
    elementH3_1.innerHTML = 'Texto!'
}


elementh1_1.className('title');

let elementsH3 = document.getElementsByTagName('h3');

for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}

document.getElementsByClassName('left-content')[0].elementMain.removeChild(elementSection2);

document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'green';

