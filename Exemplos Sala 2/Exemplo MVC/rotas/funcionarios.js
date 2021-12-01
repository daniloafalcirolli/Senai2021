//Importação do express
const express = require('express');
//Faz o gerenciamento dos metodos HTTP
const rotas = express.Router();

//Importação do controle dos funcionarios
const controle = require('../controle/funcionarios.js');

//Metodo HTTP com link pós DNS que executa o controle
rotas.get('/api', controle.get);

//Exporta as rotas para o arquivo principal
module.exports = rotas;