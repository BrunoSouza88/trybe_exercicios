const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}
console.log(longestWord('o rato roeu a roupa do rei de roma'));