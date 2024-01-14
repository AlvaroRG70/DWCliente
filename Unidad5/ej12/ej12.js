window.addEventListener("load", inicializar)


function inicializar() {
    
    let enlace = document.getElementById('enlace')
    enlace.addEventListener('mouseover', cambiarColor)
    enlace.addEventListener('mouseout', volver)

    function cambiarColor(){
        enlace.style.backgroundColor = "lightblue"
    }

    function volver(){
        enlace.style.backgroundColor = "white"
    }
        
}
    