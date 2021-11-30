const funcionario_calculo = (matricula, nome, data, salario) => {
    let json = {
        matricula: matricula,
        nome_completo:nome,
        data_desligamento:data,
        ultimo_salario:salario
    }
    let boolean = calc(salario)
    if(boolean.status != false){
        json.aliquota = calc(salario).porcentagem
        json.irrf = ((salario * calc(salario).porcentagem) / 100).toFixed(2)
    }
    return json;
}

const calc = (salario)=>{
    let json = {};
    if(salario <= 1980.90){
        json.status = false
        return json;
    }else if(salario > 1980.90 && salario <= 2940.85){
        json.status = true
        json.porcentagem = 7.50
        return json;
    }else if(salario > 2940.85 && salario <= 3902.59){
        json.status = true
        json.porcentagem = 15.0
        return json;
    }
    else if(salario > 3902.59 && salario <= 4853.13){
        json.status = true
        json.porcentagem = 22.50
        return json;
    }else {
        json.status = true
        json.porcentagem = 27.50
        return json;
    }
}

module.exports = {
    funcionario_calculo
}