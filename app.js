let amigos=[];

function agregarAmigo(){
    let amigo= document.getElementById ('amigo').value;

    if (amigo === ''){
        alert ('Debes ingresar un nombre para el sorteo');
    }
    
    amigos.push(amigo);
     
    document.getElementById('listaAmigos').innerHTML = amigos.join('<br> ');
    document.getElementById('amigo').value = '';

    
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Debes ingresar más de 2 amigos para realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = 'El amigo secreto es: ' + amigoSeleccionado;

}