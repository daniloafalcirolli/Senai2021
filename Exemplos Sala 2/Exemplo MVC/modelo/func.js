const funcionario = (parametros) => {

    const atributos = {
        "matricula": parametros.matricula,
        "nome_completo": parametros.nome_completo,
        "data_desligamento": parametros.data_desligamento,
        "ultimo_salario": parametros.ultimo_salario,
        "aliquota": 0
    }
    
    if(parametros.ultimo_salario <= 1980.90){
        atributos.aliquota = 0;
    }else if(parametros.ultimo_salario <= 2940.85){
        atributos.aliquota = 7.50;
    }else if(parametros.ultimo_salario <= 3902.59){
        atributos.aliquota = 15;
    }else if(parametros.ultimo_salario <= 4853.13){
        atributos.aliquota = 22.50;
    }else{
        atributos.aliquota = 27.50;
    }

    return atributos;
}
