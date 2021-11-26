const { con } = require("./mysql_controll.js")
const modelo = require('../model/aluno_model.js')

const all = (req,res) => {
    let string = 'select * from alunos'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}
const get_id = (req,res) => {
    let string = 'select * from alunos where id = '+ req.params.id
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const imc_id = (req,res) => {
    let string = 'select * from alunos where id = '+ req.params.id
    con.query(string, (err, result)=>{
        res.json(modelo.imc_model(
            result[0].id, 
            result[0].nome,
            result[0].peso,
            result[0].altura,
            result[0].nacimento
        ))
    })
}

const imc_status = (req,res) => {
    let string = 'select * from alunos'
    con.query(string, (err, result)=>{
        let array = []
        result.forEach(e=>{
            array.push(modelo.imc_calc(e.nome, e.peso, e.altura))
        })
        res.json(array)
    })
}

const add_aluno = (req,res) => {
    let body = req.body
    let string = 'insert into alunos(nome, peso, altura, nacimento) values (\'' + body.nome + '\',' + body.peso + ',' + body.altura + ',\'' + body.nascimento + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_aluno = (req,res) => {
    let string = 'delete from alunos where id = ' + req.params.id
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

module.exports = {
    all,
    get_id,
    imc_id,
    imc_status,
    add_aluno,
    delete_aluno
}