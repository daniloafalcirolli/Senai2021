const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const funcionario = require('./router/funcionario.js');
app.use(funcionario);

app.listen(3000, ()=>{
    console.log('Rodando');
})