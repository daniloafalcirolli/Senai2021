//Importação da conexão do banco de dados
const {con} = require('./bdconnect.js')

//Função que faz a requisição do banco de dados fazendo uso da conexão
const pegar = (req,res)=>{
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const enviar = (req, res)=>{
    let matricula = "\""+req.body.matricula+"\"";
    let nome_completo = "\""+req.body.nome_completo+"\"";
    let data_desligamento = "\""+req.body.data_desligamento+"\"";
    let ultimo_salario = "\""+req.body.ultimo_salario+"\"";
    let string = `insert into funcionarios(matricula, nome_completo, data_desligamento, ultimo_salario) values (${matricula}, ${nome_completo}, ${data_desligamento}, ${ultimo_salario})`
    con.query('select * from funcionarios', (err,result)=>{
        let  i = 0;
        result.forEach(e => {
            if(e.matricula == matricula){
                i++
            }
        })
        if(i == result.lenght){
            con.query(string, (err, result)=>{
                if(err) throw err;
                res.status(201).end()
            })
        }else{
            res.status(401).end()
        }

    })
}

//Exportação da função
module.exports = {
    pegar,
    enviar
}