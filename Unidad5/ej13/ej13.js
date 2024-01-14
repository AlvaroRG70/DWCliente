window.addEventListener("load", inicializar);

function inicializar() {

    var textoid = document.getElementById('texto')
    var boton = document.getElementById('boton')
    boton.addEventListener('click', minusculas)

    function minusculas() {

    textoid.value = textoid.value.toLowerCase()
    }

}   