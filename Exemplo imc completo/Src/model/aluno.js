function reformJson(item, id){
    item.id = id
    return item
}

function calcImc(item){
    let imc = (item.peso / (item.altura * item.altura)).toFixed(2)
    item.imc = imc
    if(imc < 18.5){
        item.status = 'Chassi de grilo';
    } else if(imc > 18.5 && imc < 25){
        item.status = 'Ta baum';
    } else if(imc > 25 && imc < 30){
        item.status = 'Fofinho';
    } else{
        item.status = 'Procure um hospital';
    }
    return item;
}

module.exports = {
    reformJson,
    calcImc
}