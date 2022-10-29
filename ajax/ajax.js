document.querySelector('button').addEventListener('click',recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://dontpad.com;tsi-js-2202', true);

    XHR.onload = function(){
        if(this.status == 200){
            document.querySelector('#dadoRecuperado').innerHTML = this.responseText;
        }
    }
}