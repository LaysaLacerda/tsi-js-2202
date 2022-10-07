//Atualizando os elementos

//const novoTitulo = document.createElement('h2');
//novoTitulo.id = 'task-title';

//novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//const tituloAtual = document.getElementById('task-title');

//let divMaeDoTitulo = document.getElementsByClassName('card-action')[0]
//divMaeDoTitulo.replaceChild(novoTitulo, tituloAtual);

const button = document.querySelector('.btn');

const item = document.querySelector('li');
button.addEventListener('click', execAction);

function execAction(evento) {
    console.log(item);
}
