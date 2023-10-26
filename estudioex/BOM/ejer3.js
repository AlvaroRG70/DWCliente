/*
6. Crea una página web que realice las siguientes funciones desde la página principal. Crea botones para cada realizar cada una de las siguientes opciones:
	- Abrir ventana flotante
	- Abrir ventana flotante y detenerla
	- Cerrar ventana flotante
	- Dar foco a la ventana flotante
	- Quitar foco ventana nueva
	- Scroll absoluto (0, 1000)
	- Scroll relativo (0, 10)
Desde la ventana secundaria se podrá realizar:
	- Mover absoluto (500, 150)
	- Mover relativo (0,50)
	- Redimensionar absoluto (500,500)
	- Redimensionar relativo (-50, -50)

*/
document.addEventListener("DOMContentLoaded",  inicializar)
function inicializar() {
    document.getElementById("crear-ventana").addEventListener("click", crearNueva)
    document.getElementById("cerrar-ventana").addEventListener("click", cerrarNueva)
    document.getElementById("foco-ventana").addEventListener("click", DarFoco)
    document.getElementById("no-foco-ventana").addEventListener("click", QuitarFoco)
    document.getElementById("scrollab-ventana").addEventListener("click", ScrollAbsoluto)
    document.getElementById("scrollrel-ventana").addEventListener("click", ScrollRelativo)
}

var NuevaVentana
function crearNueva(){
    NuevaVentana = window.open("ventananueva.html", "_blank","height=400,width=800")
}

function cerrarNueva() {
    if (NuevaVentana) {
        NuevaVentana.close()
    }
}

function DarFoco(){
    NuevaVentana.focus();
}

function QuitarFoco(){
    NuevaVentana.blur();
}

function ScrollAbsoluto(){
    NuevaVentana.scroll(0, 1000)
}

function ScrollRelativo(){
    NuevaVentana.scrollTo(0, 10)
}


