const express = require('express')
const router = express.Router()

const aluno_controll = require('../controll/aluno_controll.js')
router.get('/api/:id', aluno_controll.get_id)
router.get('/imc/:id', aluno_controll.imc_id)
router.get('/alunos/imc', aluno_controll.imc_status)
module.exports = router