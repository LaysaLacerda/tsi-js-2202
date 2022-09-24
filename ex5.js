//criar elementos

//Cria o elemento li
let NovoItem = document.createElement('li');

//Defini o id do novo elemento
NovoItem.id = 'novo-item';
NovoItem.setAttribute('id','novo-item');

//Define a classe CSS do novo elemento
NovoItem.className = 'collection-item';

//Adiciona um atributo
NovoItem.setAttribute('title','Novo item na lista');

//Adiciona um node filho
NovoItem.appendChild(document.createTextNode('Academia'));

//criando elemento a
let a = document.createElement('a');
a.className = 'delete-item secondary-content';
a.setAttribute('href',"#")

//Criando elemento i
let i = document.createElement('i');
i.className = 'fa fa-remove';

//juntando os elementos 
// <i> em <a>
a.appendChild(i);
NovoItem.appendChild(a);

let ul = document.getElementsByClassName('collection');
let vetor = Array.from(ul);

vetor.forEach(function(val){
    
    val.appendChild(NovoItem);

} );
console.log(ul);
