const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const alunos = require('./routes/aluno.js')
app.use(alunos)

app.use('/', express.Router());
app.listen(3000)