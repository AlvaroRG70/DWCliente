document.addEventListener("DOMContentLoaded",  inicializar)
function inicializar() {
    document.getElementById("mover-abs-ventana").addEventListener("click", moverAbsoluto)
    document.getElementById("mover-rel-ventana").addEventListener("click", moverRelativo)
    document.getElementById("redimensionarab-ventana").addEventListener("click", redimensionarAbs)
    document.getElementById("redimensionarrel-ventana").addEventListener("click", redimensionarRel)
}

var NuevaVentana2

function moverAbsoluto(){
    window.moveTo(100,100)
}

function moverRelativo(){
    window.moveBy(10,10)
}

function redimensionarAbs(){
    window.resizeTo(400,800)
}

function redimensionarRel(){
    window.resizeBy(100,100)

}