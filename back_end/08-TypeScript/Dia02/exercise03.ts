export type Product = {
  barcode: string,
  price: number,
};

function getProduct() {
  const product = {} as Product;
  product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
  return product;
}

console.log(getProduct());

function getObject<Type>(obj: Type): Type { return obj };

const myNumber: number = getObject<number>(1)

function getLength<T>(arr: T[]):number { return arr.length };
