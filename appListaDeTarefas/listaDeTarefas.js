//cria os elemoentos que serão usados
const li = document.createElement('li');
const a = document.createElement('a');
const i = document.createElement('i');
let ul = document.querySelector('#collection');

//pega os dados do usuário
const novoItem = document.querySelector('#tarefa');


//li.appendChild(document.createTextNode(tarefa));
li.appendChild(document.createTextNode('tarefa'));
li.id = 'novo-item';
li.className = 'collection-item';
i.className = 'fa fa-remove';
a.className = 'delete-item secondary-content';
a.setAttribute('href',"#")

a.appendChild(i);
li.appendChild(a);
//ul.appendChild(li);
//c
