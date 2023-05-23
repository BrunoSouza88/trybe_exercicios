function countBreads02<T>(breads: T[]): number {
  return breads.length;
}

type CommonBread = {
  name: string,
  allergens: string[]
};

const paoDeSal: CommonBread = {
  name: 'Pão de sal',
  allergens: ['Gluten'],
};

const paoDoce: CommonBread = {
  name: 'Pão doce',
  allergens: ['Gluten'],
};

const myBreads02= [paoDeSal, paoDoce];

console.log(countBreads02<CommonBread>(myBreads02));