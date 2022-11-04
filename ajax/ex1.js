document.querySelector('button').addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://localhost:8080/tsi-js-2202/ajax/conteudo.txt', true);

    XHR.onload = function(){
        
        if(this.status == 200){
            let objConteudo = JSON.parse(this.responseText);

            objConteudo.forEach(verMaioridade);

            function verMaioridade(val){
                if(val.idade > 17){
                    console.log(val.nome + ' é maior de idade.')
                } else{
                    console.log(val.nome + ' é menor de idade.')
                }
            };
        }
    }
    
    XHR.send();
}        