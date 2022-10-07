const card = document.querySelector('.card');

const title = document.querySelector('h5');
card.addEventListener('mousemove', execAction);

function execAction(evento) {
    //console.log(evento.type);
    title.textContent = `Eixo x: ${evento.offsetX} Eixo Y: ${evento.offsetY}`
    document.body.style.backgroundColor = `rgb(${evento.offsetX},${evento.offsetY},40)`
}

