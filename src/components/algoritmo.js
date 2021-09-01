function estados (){
    let casas = ['1','0','0','0','1'];
    let salida = '';
    let dias = 2;

    for (var i=0; i< casas.length; i++){
        salida = salida +casas[i];
    }
    if (casas.length[0] === casas.length[1]){
        salida.push('1')
    }else
    if (casas.length[1] === casas.length[2]){
        salida.push('1')
    }

    casas.forEach(function(elemento, indice, array){
        console.log(elemento, indice)
    })
}