function init(){
    //alert("Hola mundo")
    const elementoPadre = document.querySelector("#componente-padre");  //Obtiene elemento por id
    elementoPadre.textContent = "Hola mundo"; //Asigna texto

    const elementoHijo = document.createElement("h1");
    elementoHijo.textContent = "Soy el hijo";

    elementoPadre.appendChild(elementoHijo);

    const segundaRamita = document.createElement("div");
    segundaRamita.textContent = "Segundo div";
    segundaRamita.id = "segundo-hijo";
    elementoPadre.appendChild(segundaRamita)

    const nieto = document.createElement("img");
    nieto.src = "https://media.tenor.com/Lggs3JjgGz0AAAAC/beber-bebe.gif";
    nieto.id = "nieto";

    segundaRamita.appendChild(nieto);

    const botonDinamico = document.createElement("button");
    botonDinamico.textContent = "Cambia imagen";
    botonDinamico.onclick = presionado;
    botonDinamico.onauxclick = clickDerecho;

    segundaRamita.appendChild(botonDinamico);

}

function presionado (){
    const nieto = document.querySelector("#nieto");
    console.log(nieto.src);
    nieto.src = "https://media.tenor.com/ds3AJk1N1QEAAAAM/pe%C3%B1a-love.gif";
}

function clickDerecho (){
    const nieto = document.querySelector("#nieto");
    nieto.src = "https://media.tenor.com/Lggs3JjgGz0AAAAC/beber-bebe.gif";
}


document.body.onload = init;