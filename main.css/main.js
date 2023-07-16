//calcular frete por Peso e Cubagem e Percentual



function clicar() {
    //Valores a calcular
    var peso = document.querySelector(".peso").value;
    var altura = document.querySelector(".altura").value;
    var largura = document.querySelector(".largura").value;
    var comprimento = document.querySelector(".comprimento").value;
    var quantidade = document.querySelector(".quantidade").value;
    var valor = document.querySelector(".valor").value;
    

    
    //Calculo do Frete - Parametros usado
    var FretePeso = 0.75
    var FreteCubagem = 154
    var FreteMinimoPercentual = 6
    var cubagem = parseFloat(altura) * parseFloat(largura) * parseFloat(comprimento) * parseFloat(quantidade) / 10000;
    
    
    //resultado Peso
    var resultadoPeso = parseInt(peso) * parseFloat(FretePeso);
    document.querySelector("#currency").innerHTML = resultadoPeso;

    //resultado Cubagem
    var resultadoCubagem = parseFloat(cubagem) * parseFloat(FreteCubagem) / 100;
    document.querySelector("#currency").innerHTML = resultadoCubagem;

    //resultado percentual
    var resultadoPercentual = parseInt(valor) * parseFloat(FreteMinimoPercentual)/100;
    document.querySelector("#currency").innerHTML = resultadoPercentual;
    


    if(resultadoPeso > resultadoPercentual &&resultadoPeso > resultadoCubagem){
        document.querySelector("#currency").innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(resultadoPeso);
    } else if (resultadoCubagem > resultadoPercentual && resultadoCubagem > resultadoPeso)
        document.querySelector("#currency").innerHTML = document.querySelector("#currency").innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(resultadoCubagem);
        else if (resultadoPercentual > resultadoCubagem && resultadoPercentual > resultadoPeso){
            document.querySelector("#currency").innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(resultadoPercentual);
            
        
        }
            
        
        
}

