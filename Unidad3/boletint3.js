/*
1. Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
*/

/*
var nombre = prompt("Escribe un nombre")
let contadorC = 0
let contadorñ = 0

while (nombre.toUpperCase() != "ULTIMO") {

    if (nombre.charAt(0) == "C"){
        contadorC ++
    } 
    if (nombre.match("ñ") != null){
        contadorñ ++
    }

    nombre = prompt("Escribe otro nombre o ultimo para terminar")
}

document.write(contadorC + ' nombres contienen la C y '+ contadorñ+ ' contienen la ñ')
*/

/*
a)  Comprobar que el nombre de usuario contiene al menos tres letras. Si no es así, debe
aparecer un mensaje por pantalla indicando que el texto no cumple tener al menos tres
letras. Debe aparecer el mensaje: “El nombre no cumple tener al menos tres letras”.
EJERCICIO PPT
*/
/*
var nombre_us = "Alvaro@gmailcom"
var er = /\w{3,}@/
var er2 = /\w@\w+\.\w+/
var er3 = /\sat\s/
console.log(er.test(nombre_us))
console.log(er2.test(nombre_us))
console.log(nombre_us.replace(er3, '@'))
*/


/*
2. Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
*/
var texto = "hola si adios no alvaro alberto luis"
er = /(\w+\s|\w+$)/
console.log(texto.match(er))






























