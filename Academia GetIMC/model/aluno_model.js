const imc_model = (id, nome, peso, altura, nascimento) => {
    let data = (nascimento+'').split('T')
    let json =   {
        "id": id,
        "nome": nome,
        "peso": peso,
        "altura": altura,
        "nacimento": data[0],
        "imc":(peso / (altura * altura)).toFixed(2)
    }
    return json
}

const imc_calc = (nome, peso, altura) => {

    let imc = peso / (altura ** 2)
    let json = {
        'nome':nome,
        'peso':peso,
        'altura':altura,
        'imc':imc.toFixed(2)
    }


    if(imc < 18.5){
        json.status = 'Chassi de grilo'
    } else if(imc > 18.5 && imc < 25){
        json.status = 'Ta baum'
    } else if(imc > 25 && imc < 30){
        json.status = 'Fofinho'
    } else{
        json.status = 'Procure um hospital'
    }

    return json
}

module.exports = {
    imc_model,
    imc_calc
}