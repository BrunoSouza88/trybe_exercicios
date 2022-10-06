let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

console.log ('O nome da atleta é: ' + player.name);
console.log ('O sobrenome da atléta é: ' + player.lastName);
console.log ('A idade da atleta é: ' + player.age + ' anos de idade');
console.log ('As medalhas que a atléta ganhou são: ' + medals.golden + ' de ouro' + ' e ' + medals.silver + ' de prata')