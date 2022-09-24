let e;

//getElementsByClassName
e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){
    val.style.color = 'red';

    //val.innerText = 'Jogar';
});

//querySelectorAll
e = document.querySelectorAll('li');

e.forEach(function(val){
    val.style.color = 'purple';
    
} )

//listrado 
//even = par
//odd = impar
e = document.querySelectorAll('li:nth-child(even)');

e.forEach(function(val){
    val.style.background = 'pink';
    
} );

//trocando a cor dos x
e = document.querySelectorAll('i');

e.forEach(function(val){
    val.style.color = 'gray';
    
} );

//Sem função anonima 
e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){
    console.log(val);
};

//console.log(e[2])

//firstChild, lastChild, childElementCount, children
e = document.querySelector('ul.collection');
console.log(e.children[2].children[1]);
