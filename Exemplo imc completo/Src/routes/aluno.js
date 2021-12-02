const express = require('express');
const rota = express.Router();

const controller = require('../controllers/alunos.js');
rota.get('/academia/alunos', controller.get);
rota.get('/academia/aluno/:id', controller.getid);
rota.get('/academia/alunos/imc', controller.getimc);
rota.get('/academia/aluno/imc/:id', controller.getidimc);
rota.post('/academia/aluno/adicionar', controller.post);
rota.put('/academia/aluno/atualizar', controller.put);
rota.delete('/academia/aluno/apagar/:id', controller.del);

module.exports = rota;