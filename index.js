const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');


/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
console.log(path.join(__dirname, 'client/build'));
app.use(express.static(path.join(__dirname, 'client/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações',
  });
});

/**
 * Rotas principais do app
 */
app.use('/api/transaction', routes);

/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;
const APP_PORT = process.env.PORT || 3001;

const loadProxyReact = () => {
  // read/process package.json
  const file = './client/package.json';
  let pkg = JSON.parse(fs.readFileSync(file).toString());

  // at this point you should have access to your ENV vars
  pkg.proxy = `http://localhost:${APP_PORT}`;

  // the 2 enables pretty-printing and defines the number of spaces to use
  fs.writeFileSync(pkg, JSON.stringify(file, null, 2));
};

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');



  /**
   * Definição de porta e
   * inicialização do app
   */
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
