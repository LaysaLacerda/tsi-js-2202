localStorage.setItem('nome', 'Camila');
localStorage.setItem('Sobrenome', 'Silva');

let btn = document.getElementById('btn');

btn.addEventListener('click', mostrar);

function mostrar(evento) {
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';

    //guardando dado na local storage
    localStorage.setItem('dadosDoUsuario', valor);
}
//recuperando o dado após o F5
document.querySelector('#mostrar').innerText = localStorage.getItem('dadosDoUsuario');

//APAGANDO DA LOCAL STORAGE
//removeItem()
//localStorage.removeItem('dadoDoUsuario');

//sessionStorage

let vetor = ['pera','banana','manga'];

sessionStorage.setItem('frutas',JSON.stringify(vetor));

let dadosRecuperado = JSON.parse(sessionStorage.getItem('frutas'));
dadosRecuperado[3] = 'morango';

console.log(dadosRecuperado);

sessionStorage.setItem('frutas',JSON.stringify(dadosRecuperado));
