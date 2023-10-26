/*Crear un programa que va a crear un reloj digital en el título. Utilice el método setInterval() para actualizar el título de la página una vez cada minuto con la hora actual.*/


function relojandante() {
    var actual = new Date()
    var segundos = actual.getSeconds().toString().padStart(2,"0")
    var minutos = actual.getMinutes().toString().padStart(2,"0")
    var horas = actual.getHours().toString().padStart(2,"0")

    var reloj = horas + ":" + minutos + ":" + segundos
    document.title= reloj
}

setInterval(relojandante, 1000)
relojandante()

