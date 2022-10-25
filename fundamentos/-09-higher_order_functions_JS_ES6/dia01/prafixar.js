const waking = () => {
    return 'Acordando!!'
}

const coffee = () => {
    return 'Bora tomar café!!'
}

const sleep = () => {
    return 'Partiu dormir!!'
}

const doingThings = (func) => func(waking)

console.log(doingThings(waking));