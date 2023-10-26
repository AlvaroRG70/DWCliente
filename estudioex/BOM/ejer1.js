document.addEventListener("DOMContentLoaded",  inicializar)
function inicializar() {
    document.getElementById("crear-ventana").addEventListener("click", crearNueva)
    document.getElementById("cerrar-ventana").addEventListener("click", cerrarNueva)
}

var NuevaVentana
function crearNueva(){
    NuevaVentana = window.open("", "_blank","height=400,width=800")
    NuevaVentana.document.write('<h1 style="font-size: 24px;">El ojo es la ventana a tu alma</h1>');
}

function cerrarNueva() {
    if (NuevaVentana) {
        NuevaVentana.close()
    }
}