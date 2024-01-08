/*
1. Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
*/
/*
var nombre = prompt("Ingrese un nombre")
var contadorc = 0
var contador2 = 0
var re1 = /^C\w+/
var re2 = /ñ/
while (nombre.toLocaleUpperCase() != "ULTIMO") {
    if (re1.test(nombre)) {
        contadorc++
    }
    if (re2.test(nombre)) {
        contador2++
    }
    nombre = prompt("Ingrese un nombre")
}
console.log(contadorc)
console.log(contador2)
*/
/*
2. Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
*/
/*
var cadena = prompt("Ingrese una cadena")
var re1 = /^C/
var re2 = /\b\w+\b/g
var contador = 0
var palabras = cadena.match(re2)
var numeropal = palabras.length
for (i = 0; i<numeropal; i++) {
    if (re1.test(palabras[i])) {
        contador++
    }
}
console.log(contador)
console.log(palabras)
*/

/*
4. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
*/

/*
var cadena = prompt("Ingrese una cadena")
var re = /\(\w\)/g
//var re2 = (/\((\w|\s)*//*g
contador1 = 0
contador3 = 0
if (re.test(cadena)) {
    console.log(cadena.match(re))
}
if (re2.test(cadena)){
    console.log(cadena.match(re2))
}
*/

/*
5. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
/*
 var cadena2 ="hola jajaja"
 var cadenanueva = ""
 for (i = cadena2.length -1 ; i>=0; i--){
    var valor = cadena2[i]
    cadenanueva = cadenanueva + valor
 }
console.log(cadenanueva)

//otra opcion

var cadena = "hola que tal"
var cadenafin = ""
for (i = cadena.length - 1; i >= 0; i--){
    var letra = cadena.charAt(i)
    cadenafin = cadenafin.concat(letra)
}
console.log(cadenafin)
*/
/*
6. Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad del usuario por pantalla.
*/
/*
var cadena = prompt("introduzca una cadena")
var er = /\d+/
var lista = cadena.match(er)
console.log(lista)
*/
/*
7. Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.
*/

/*
var cadena = prompt("introduce un email")
var er = /\w+@\w+/

while (er.test(cadena) == false){
    var cadena = prompt("introduce un email")
}
var lista = cadena.split("@")
console.log(lista[0])
console.log(lista[1])
*/

/*
8. Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....
*/

var cadena = prompt("escribe un palindromo")
var cadenareves = ""
for (i = cadena.length - 1; i>=0; i--){
    var valor = cadena[i]
    cadenareves = cadenareves + valor
}

if (cadena == cadenareves){
    console.log("es un palidnromo")
} else {
    console.log("no es un palindromo")
}

/*
9. Realiza un supertrim de una cadena, eliminando todos los espacios duplicados
*/
var cadena2 = "tiene  espacios  duplicados"
document.write(cadena2.trim())


/*
10. Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.
*/

var cadena = "vamos a ver aa si a es la q mas se repita"
var contador = 0

/*
12.Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
*/

var matricula = "ABC-a234"
var er = /^[A-Z][A-Z][A-Z]-[0-9][0-9][0-9][0-9]$/
if (er.test(matricula)) {
    console.log("matrícula válida")
} else {
    console.log("matrícula no válida")
}

/*
13.Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, no existe un código postal en España que empiece por 53 o superior.
*/

var postal = "52998"
var er = /^[0-5][0-2][0-9][0-9][0-9][0-9]$/
if (er.test(postal)) {
    console.log("postal válida")
} else {
    console.log("postal no válida")
}


/*
14. Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
*/

var horario = "08:12"
var reg = /[0-2][0-9]:[0-5][0-9]/


/*
15. Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)
*/

var regex = /\d{1,3},\d{1,3}/

