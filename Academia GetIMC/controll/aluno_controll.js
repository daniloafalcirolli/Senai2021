const { con } = require("./mysql_controll.js")
const modelo = require('../model/aluno_model.js')

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

module.exports = {
    get_id,
    imc_id,
    imc_status
}