// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo(){
    let amigoEscrito = document.getElementById('amigo').value;      
    
    if (amigoEscrito == ''){
        alert('Por favor, inserte un nombre valido')
    }else{
        listaNombres.push(amigoEscrito);
        console.log(listaNombres); 
        let nombresLista = document.querySelector('ul');           
        nombresLista.innerHTML = ''; 

        for (let i = 0; i < listaNombres.length; i++) {
            let li = document.createElement('li');
            li.textContent = listaNombres[i];
            nombresLista.appendChild(li);
            }
        }       
    limpiarCaja()
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}

function sortearAmigo(){
    if(listaNombres == ''){
        alert('Por favor, inserte los nombres')
    }else{
    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    // Obtener el nombre sorteado
    let nombreSorteado = listaNombres[indiceAleatorio];
    // Mostrar el resultado 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
    // Quitar la lista de nombres
    let nombresLista = document.querySelector('ul');
    nombresLista.innerHTML = '';
    }
}