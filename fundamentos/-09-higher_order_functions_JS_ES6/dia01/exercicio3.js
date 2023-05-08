const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS){
        return 1;
    } if (STUDENT_ANSWERS === 'N.A') {
        return 0;
    }
    return -0.5
}

const contarPonto = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
    let count = 0;
    for (index = 0; index < RIGHT_ANSWERS.length; index +=1){
        const actionReturn = action(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        count += actionReturn;
    }
    return `Resultado final: ${count} pontos`;
}
console.log(contarPonto(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));