const express = require('express')
const router = express.Router()

const aluno_controll = require('../controll/aluno_controll.js')
router.get('/academia/alunos', aluno_controll.all)
router.get('/academia/aluno/:id', aluno_controll.get_id)
router.get('/academia/imc/:id', aluno_controll.imc_id)
router.get('/academia/status', aluno_controll.imc_status)
router.post('/academia/create',aluno_controll.add_aluno)
router.delete('/academia/delete/:id', aluno_controll.delete_aluno)
router.put('/academia/update', aluno_controll.update_aluno)

module.exports = router