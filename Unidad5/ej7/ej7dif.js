window.addEventListener("load", inicializar);

function inicializar() {
 
    let form = document.getElementById('formulario')
    
    let botones = document.getElementsByName('boton')
    for (let boton of botones){
        boton.addEventListener('click', cambiarColor)
    }

    function cambiarColor(e){
        let botonPulsado = e.currentTarget
        console.log(botonPulsado.value)

        document.body.style.backgroundColor = botonPulsado.value
    }
}   