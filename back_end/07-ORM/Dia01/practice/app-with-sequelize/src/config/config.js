// Pequenas configurações previas. Primeiro alterar o arquivo de Json para JS.
// Dentro dessa pasta especifica esta todas as configurações do nosso banco.
// Devemos mudar os valores das chaves abaixo para valores de ambiente
module.exports = {
  // "development": { // Informações originais gerada pela instalação padrão.
  //   "username": "root",
  //   "password": null,
  //   "database": "database_development",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "development": { // Essa deve ser como ficará o banco de desenvolvimento após a implementação dos valroes de ambiente
    "username": process.env.MYSQL_USER, // process.env da acesso aos valores de ambiente. Que estão configurados no arquivo .ENV criado anteriormente
    "password": process.env.MYSQL_PASSWORD, // o valor usado aqui esta no .ENV
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql", // Unico que não esta descrito no .ENV . Aqui ele sabe qual será os comandos que precisará usar internamente para lidar com o banco. Nesse caso, MySQL. Caso haja alguma mudança, podemos mudar direto para 'postgresql' e afins.
  },
  "test": { // Caso precise usar banco para testes, só alterar conforme o .ENV de testes necessário
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": { // Mesmo caso do teste. 
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
