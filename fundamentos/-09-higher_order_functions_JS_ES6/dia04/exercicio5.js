const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  const containsA = () => {
    let totalA = 0;
    names.forEach((name) => {
        const lettersName = name.split('');
        totalA += lettersName.reduce((acc, curr) => {
            if (curr === 'a' || curr === 'A'){
            return acc +1;
            }
            return acc
        } , 0)
    })
    return totalA;
}

console.log(containsA());

