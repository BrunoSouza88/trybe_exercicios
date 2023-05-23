1 - NPM Init -y === Para iniciar NPM
2 - npm install -E sequelize@6.3.4 === Instalação do sequelize versão 6.3.4
3 - .gitignore/node_modules === para não enviar ao github arquivos desnecessários
4 - criação arquivo .env na raiz do projeto para conter as credenciais de acesso ao MySQL
5 - npm install -D -E sequelize-cli@6.2.0 === instalação do CLI sequelize para usarmos com MySQL
6 - npm install -E mysql2@2.1.0 === Instalção do mysql2 na versão 2.1
7 - criação da pasta src (source) que irá abrigar todo o projeto
8 - npx sequelize-cli init === dentro da pasta src para executar o CLI do sequelize
9 - .sequelizerc === a finalidade do arquivo é de configurar o caminho das pastas criadas no comando acima. Models, migrations, seeders e config.
config: contém um arquivo de configuração, com orientações para o CLI se conectar com o nosso banco de dados;
models: contém todos os modelos da nossa aplicação;
migrations: contém todos os arquivos de migração da nossa aplicação;
seeders: contém todos os arquivos de “seeds” (sementes que são usadas para popular o banco).
10 - após a configuração de ENV e config.js do config sequelize, será necessário alterar o index.js dentro da pasta src/models
11 - docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha_mysql -d -p 3306:3306 mysql:8.0.29 === commando docker para criar um container para esse projeto especifico
12 - env $(cat .env) npx sequelize db:create === comando para criação do DB do projeto