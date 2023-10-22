/*
3. Crear dos enlaces, uno para abrir una nueva ventana y uno para cerrarla. La nueva ventana mostrará este mensaje en una fuente grande : ​”El ojo es la ventana a tu alma “. La nueva ventana se coloca en la esquina izquierda de la pantalla , será redimensionable , tendrá una barra de desplazamiento, y estará en primer plano.
*/
/*
function AbrirVentana (url){
    var ventana = window.open(url, "ventana1", "width=300, height=120" );
}
*/
/*
function AbrirVentana() {
    var ventana = window.open('', 'ventana1', 'width=300,height=200,');
    ventana.document.write('<h1 style="font-size: 24px;">El ojo es la ventana a tu alma</h1>');
}
function CerrarVentana() {
    var ventana = window.close('ventana1')
}
*/

/*
4. En un cuadro de diálogo de alerta, muestre el alto y ancho en píxeles y la profundidad de color de su pantalla. Cada valor será separado por un salto de línea.
*/
/*
var ancho = window.innerWidth 
var largo = window.innerHeight
var color = window.colordeph
var cadena = ancho + " x " + largo + " x " + color  
window.alert(cadena)
*/

/*
5. Crear un programa que va a crear un reloj digital en el título. Utilice el método setInterval() para actualizar el título de la página una vez cada minuto con la hora actual.
*/
// Función para obtener la hora actual en formato HH:MM:SS
function actualizarReloj() {
    var fecha = new Date()
    var segundos = fecha.getSeconds().toString().padStart(2, '0')
    var minutos = fecha.getMinutes().toString().padStart(2, '0')
    var horas = fecha.getHours().toString().padStart(2, '0')
    var reloj = horas + ":" + minutos + ":" + segundos 

    document.title = reloj
}

setInterval(actualizarReloj(), 1000)

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
/*
*/
function AbrirVentanaFlotante() {
    var ventana = window.open('', 'ventana2', 'width=300,height=200')
    ventana.document.write('<h1>Esto es una ventaba flotante</h1>')
}

function CerrarVentanaFlotante() {
    if (ventana) {
        ventana.close();
    }
}

function DarFoco(){
    if (ventana2 && !ventana2.closed) {
        ventana2.focus();
    }
}

function QuitarFoco(){
    var ventana = window.blur('ventana2')
}

function ScrollAbsoluto(){
    window.scroll(0, 1000)
}

function ScrollRelativo(){
    window.scrollTo(0, 10)
}