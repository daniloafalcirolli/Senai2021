const { connection } = require('./db/mysql.js');
const model = require('../model/aluno.js');

const get = (req, res) => {
    let string = `select * from alunos`;
    connection().query(string, (err, result) => {
        connection().end();
        res.json(result);
    });
}

const getid = (req, res) => {
    let string = `select * from alunos where id = ${req.params.id}`;
    connection().query(string, (err, result) => {
        connection().end();
        res.json(result);
    });
}

const getimc = (req, res) => {
    let string = `select * from alunos`;
    connection().query(string, (err, result) => {
        connection().end();
        let array = [];
        result.forEach(e=>{
            array.push(model.calcImc(e));
        })
        res.json(array);
    });
}

const getidimc = (req, res) => {
    let string = `select * from alunos where id = ${req.params.id}`;
    connection().query(string, (err, result) => {
        connection().end();
        res.json(model.calcImc(result[0]));
    });
}

const post = (req, res) => {
    let string = `insert into alunos(nome, peso, altura, nascimento) value ('${req.body.nome}', ${req.body.peso}, ${req.body.altura}, '${req.body.nascimento}')`;
    connection().query(string, (err, result) => {
        connection().end();
        if (result.affectedRows == 1) {
            res.status(201).json(model.reformJson(req.body, result.insertId)).end();
        } else {
            res.status(406).end();
        }
    });
}

const put = (req, res) => {
    let string = `update alunos set nome = '${req.body.nome}', peso = ${req.body.peso}, altura = ${req.body.altura}, nascimento = '${req.body.nascimento}' where id = ${req.body.id}`;
    connection().query(string, (err, result) => {
        connection().end();
        if(result.changedRows == 1){
            res.status(302).json(req.body).end();
        }else{
            res.status(304).end();
        }
    });
}

const del = (req, res) => {
    let string = `delete from alunos where id = ${req.params.id}`;
    connection().query(string, (err, result) => {
        connection().end();
        if(result.affectedRows == 1){
            res.status(410).end();
        }else{
            res.status(304).end();
        }
    });
}

module.exports = {
    get,
    getid,
    getimc,
    getidimc,
    post,
    put,
    del
}