// O lakers e o BC estão disputando a liga da NBA
// Desenvolva uma função que irá receber um arrau de cada time contendo a pontuação das partidas. Eessa função deve retornar
// qual time ganhou mais partidas e sagrou-se campeão 

function nbaChamp (lakers, celtics) {
  let countLakers = 0;
  let countCeltics = 0;

  for (let index = 0; index < lakers.lenght ; index += 1) {
    if (lakers[index] > celtics[index]) {
        countLakers += 1;
    } else {
        countCeltics += 1;
    }
  } 
 if (countLakers > countCeltics) {
    return 'Lakers foi o time campeão com ' + countLakers;
 } else {
    return 'Celtics foi o time campeão com ' + countCeltics;
 }
}

console.log(nbaChamp([110, 100, 117], [108, 99, 110]));