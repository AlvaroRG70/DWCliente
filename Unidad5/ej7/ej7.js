window.addEventListener("load", inicializar)

function inicializar() {


    let form = document.getElementsByName('seleccion')

    for (let a of form){
        a.addEventListener('click', cambiarColor)
    }

    function cambiarColor(e) {

        let botonPulsado = e.currentTarget
        document.body.style.backgroundColor = botonPulsado.value

    }
    

}