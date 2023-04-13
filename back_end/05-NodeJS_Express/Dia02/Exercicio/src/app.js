const express = require('express'); // Importando express
const fs = require('fs').promises; // Importando FS para fazer leituras e escritas no arquivo

const app = express(); // Só sei que tem que fazer isso para poder usar GET, POST, PUT, DELETE

app.use(express.json()); // Precisa para poder fazer além de GET

const filePath = './src/movies.json'; // Salvo numa variável o caminho do arquivo que será lido e sobrescrito

const funcReadFile = async () => { 
  //Função genérica para leitura do arquivo. Normalmente usada em todo o REST
  const arquivo = await fs.readFile(filePath, 'utf-8');
  const arquivoJsonParse = JSON.parse(arquivo);
  // Aqui chega como array
  return arquivoJsonParse;
}

app.get('/movies/', async (_req, res) => { 
  // GET simples, que atraves da rota data, encontra os itens do arquivo lido abaixo
  const movies = await funcReadFile();
  return res.status(200).json(movies);
});

app.get('/movies/:id', async (req, res) => {
  // Aqui é necessário fazer uma desestruturação do ID vindo de Requisição, para poder comparar e retornar só o item pedido pelo ID
  const { id } = req.params; // Desestruturar ID de parametros da Requisição
  const movies = await funcReadFile(); // Ler o arquivo com a função generica e salvar numa variavel.
  const movie = movies.find((element) => Number(element.id) === Number(id)); // Usar HoF find para encontrar o Item pelo ID (lembrar de usar Number() em tudo!

  if(!movie) {
    // Case movie seja indefinido (ou seja, o ID passado não existir), deve se entregar a RESposta
    res.status(500).send({message: 'ID errado'});
  } else {
    // Aqui o ID coincide então nós devolvemos ao usuário o item com ID solicitado
    res.status(200).json(movie);
  }
});

app.post('/movies/', async (req, res) => {
  // POST serve par adicionar um item ao arquivo
  const { movie, price } = req.body; 
  // A desestruturação aqui serve para pegar o itens que serão enviados pelo REQuisição do usuario. req.body
  
  try {
    const movies = await funcReadFile(); // Faz a leitura do arquivo. Padrão.
    const newMovie = { // Aqui temos uma variável que será adicionada ao arquivo.
      id: movies[movies.length - 1].id + 1, // Essa lógica permite que o ID seja dinamico, levando em consideração do tamanho dos itens dentro do arquivo
      movie, // Parte do REQ.body enviado. Como tem o mesmo nome, não precisa por chave:valor.
      price, // Mesmo que acima.
    }
    movies.push(newMovie); // Aqui demos o push no arquivo lido com o novo item, o empurrando para o final da lista. Isso funciona bem com o push e não causa problemas com o ID sendo ultmo.
    await fs.writeFile(filePath, JSON.stringify(movies)); 
    // Após o push nos usamos o FS para escrever no arquivo (usando seu caminho), o array antigo com o push já feito. SEMPRE FAZER O STRINGIFY NESSA PARTE
    res.status(200).json(newMovie); // Mais uma vez, devolver ao usuário se sua requisição foi feita.
  } catch (error) {
    res.status(500).send({message: "Erro ao criar um novo filme"})
    // Aqui é um tratamento de erro simples
  }
});

app.put('/movies/:id', async (req, res) => {
  // PUT serve para editar um item da lista
  const { id } = req.params; // Pegamos ambos o ID, como parametro de busca
  const { movie, price } = req.body; // Body para atualizar os atributos dos itens
  try {
    const movies = await funcReadFile(); // Leitura padrão do arquivo
    const movieIndex = movies.findIndex((element) => Number(element.id) === Number(id)); // Achando o index do ID que queremos editar
    movies[movieIndex] = { // Com o index encontrado, passamos quais itens alterar. No caso movie(nome do filme), price (novo preço)
      id: Number(id),
      movie, // Isso aqui esta vindo da requisição
      price,
    }
    const updateMovies = JSON.stringify(movies, null, 2); // Criamos uma variavel para guardar a mudança
    await fs.writeFile(filePath, updateMovies); // Mais uma vez escreveremos no arquivo, com os dados já alterados
    res.status(200).json(movies[movieIndex]); // E exibiremos as novas informações ao usuario
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' }) // tratamento padrão de erro
  }
});

app.delete('/movies/:id', async (req, res) => {
  // DELETE para apagar um item, através de seu ID
  const { id } = req.params; // Desestruturação basica, buscando o ID do REQuisição do usuário
  try {
    const movies = await funcReadFile(); // Leitura padrão do arquivo
    const newArray = movies.filter((element) => Number(element.id) !== Number(id)); // Salva numa nova variavel todos os itens que tem o ID diferente do que pesquisamos. Assim temos todos os itens que não queremos apagar
    const updateMovies = JSON.stringify(newArray, null, 2) // Fazemos o tratamento JSON dele
    await fs.writeFile(filePath, updateMovies); // Escrevemos no arquivo todos os itens que devem retornar. Tirando aquele ID que pesquisamos e 'deletamos" anteriormente
    res.status(200).json(newArray); // Retorno ao usuario, com os itens, menos o que foi deletado
  } catch (error) {
    res.status(500).send({ message: "Não apagou o item" }) // tratamento simples de erro.
  }

});
module.exports = app;