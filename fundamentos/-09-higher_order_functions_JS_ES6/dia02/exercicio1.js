const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//   Adicione o código do exercício aqui:

//   const writer1947 = (number) => {
//     return books.find((book) => book.author.birthYear === 1947).author.name
//   }; 

//   console.log(writer1947());

  // __________________________________________________________________________________________________________

// const smallerBook = () => {
//     let bookSome;
//     books.forEach((book) => {
//         if (!bookSome || book.name.length < bookSome.length){
//             bookSome = book.name
//         } 
//     });
//     return bookSome
// };

// console.log((smallerBook()))

  // __________________________________________________________________________________________________________


// const book25char = () => {
//     return books.find((book) => book.name.length === 26);
// };

// console.log(book25char());

 // __________________________________________________________________________________________________________

//  const bookOrder = () => {
//     return books.sort((a, b) => b.releaseYear - a.releaseYear)
//  };

//  console.log(bookOrder());

 // __________________________________________________________________________________________________________

const bornSameYear = () => {
    return books.every((book) => book.author.birthYear !== book.author.birthYear)
        
};

console.log(bornSameYear());