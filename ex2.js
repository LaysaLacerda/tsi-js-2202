let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault();

    let servico     = document.getElementById('servico');
    let prazo       = document.getElementById('prazo');
    let resposta    = document.getElementById('resultado');

    //matriz
    let preco = calcularPreco(servico.value ,prazo.value)

    //if( preco.match('$').length > 0  ){
        resposta.innerText = `O preço é ${preco}`;
    //}else{
        //resposta.innerText = preco;
  //  };
    

    console.log(servico.value);

    //ver dados do evento click no console
    console.log(evento);

    
    //obter valores de serviços e prazos
    console.log(prazo.value);
});

function calcularPreco( servico, prazo){

    let tabela = [  ['$$$','$$','$'],
                    ['$$$$','$$$','$$'],
                    ['Não faz','Não faz','$$$']];

   // console.log("O serviço ficará em: " + tabela[servico][prazo]);
   return tabela[servico][prazo];
}