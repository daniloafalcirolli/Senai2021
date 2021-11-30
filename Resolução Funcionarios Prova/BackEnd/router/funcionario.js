const express = require('express');
const router = express.Router();

const funcionario = require('../controller/funcionario.js');
router.get('/funcionarios', funcionario.get);
router.get('/funcionario/:matricula', funcionario.get_id);
router.post('/funcionario/adicionar', funcionario.post);
router.put('/funcionario/atualizar', funcionario.put);
router.delete('/funcionario/apagar/:matricula', funcionario.del);
router.get('/funcionarios/calcular', funcionario.calc);
router.get('/funcionarios/calcular/:matricula', funcionario.calc_id);

module.exports = router;