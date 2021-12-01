//Importação da conexão do banco de dados
const {con} = require('./bdconnect.js')

//Função que faz a requisição do banco de dados fazendo uso da conexão
const get = (req,res)=>{
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

//Exportação da função
module.exports = {
    get
}