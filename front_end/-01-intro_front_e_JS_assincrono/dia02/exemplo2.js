// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);


const learningPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber2 = generateRandomNumber();
      resolve(randomNumber2)
    }, 10000)
  })

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

  console.log(generateRandomNumber());