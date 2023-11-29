var cadena = ""
var listacanciones = []
while (cadena != "salir" ){
    var cadena = (prompt("Escribe la cacnion y su interprete"))
    cadena.split(",")
    let cancion = new Cancion(cadena[0], cadena[1])
    listacanciones.push(cancion)
}


let reproductor = new Reproductor(listacanciones)
console.log(reproductor.aumentaVolumen())
console.log(reproductor.disminuyeVolumen())
console.log(reproductor.mostrarVolumen())
console.log(reproductor.disminuyeVolumen())
console.log(reproductor.mostrarLista())
reproductor.anyadecancion(new Cancion("hola","si"))


