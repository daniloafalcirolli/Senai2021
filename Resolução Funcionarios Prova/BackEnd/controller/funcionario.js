const {con} = require('./dbconnect.js');
const {funcionario_calculo} = require('../model/funcionario.js');

const get = (req,res) => {
    try {
        let string = 'select * from funcionarios';
        con.query(string, (err,result)=>{
            res.json(result);
        });
    } catch (error) {
        res.status(400).end();
    }
}

const get_id = (req,res) => {
    try {
        let string = 'select * from funcionarios where matricula = ' + req.params.matricula;
        con.query(string, (err,result)=>{
            if(result == ''){
                res.status(404).end();
            }else{
                res.json(result);
            }
        });
    } catch (error) {
        res.status(400).end();
    }
}

const post = (req,res) => {
    try {
        let string = 'insert into funcionarios(matricula, nome_completo, data_desligamento, ultimo_salario) values ('+req.body.matricula+',\''+req.body.nome_completo+'\', \''+req.body.data_desligamento+'\','+req.body.ultimo_salario+')';
        con.query(string, (err,result)=>{
            if(result.affectedRows == 1){
                res.status(201).end();
            }else{
                res.status(304).end();
            }
        });
    } catch (error) {
        res.status(400).end();
    }
}

const put = (req, res) => {
    try {
        let string = 'update funcionarios set nome_completo = \'' + req.body.nome_completo + '\', data_desligamento = \''+ req.body.data_desligamento + '\', ultimo_salario = ' + req.body.ultimo_salario + ' where matricula = ' + req.body.matricula;
        con.query(string, (err,result)=>{
            if(result.affectedRows == 1){
                con.query('select * from funcionarios where matricula =' + req.body.matricula, (err,result)=>{
                    res.json(result);
                })
            }else{
                res.status(304).end();
            }
        });
    } catch (error) {
        res.status(400).end();
    }
}

const del = (req,res) => {
    try {
        let string = 'delete from funcionarios where matricula = ' + req.params.matricula;
        con.query(string, (err,result)=>{
            if(result.affectedRows == 1){
                res.status(410).end();
            }else{
                res.status(404).end();
            }
        });
    } catch (error) {
        res.status(400).end();
    }
}

const calc = (req,res) => {
    try {
        let string = 'select * from funcionarios';
        con.query(string, (err,result)=>{
            let array = []
            result.forEach(e=>{
                funcionario_calculo(e.matricula, e.nome_completo, e.data_desligamento, e.ultimo_salario)
                array.push(funcionario_calculo(e.matricula, e.nome_completo, e.data_desligamento, e.ultimo_salario))
            })
            res.json(array)
        });
    } catch (error) {
        res.status(400).end();
    }
}

const calc_id = (req,res) => {
    try {
        let string = 'select * from funcionarios where matricula = ' + req.params.matricula;
        con.query(string, (err,result)=>{
            res.json(funcionario_calculo(result[0].matricula, result[0].nome_completo ,result[0].data_desligamento, result[0].ultimo_salario))
        });
    } catch (error) {
        res.status(400).end();
    }
}

module.exports = {
    get,
    get_id,
    post,
    put,
    del,
    calc,
    calc_id
};