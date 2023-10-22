//STRING

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
        contador ++
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
2. Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
*/
/*
var cadena = "hola si no carmen Claudia correa"
er = /\b\w+\b/gi
erC = /^C/gi
var contador = 0
var palabra = cadena.match(er)
var numpal = palabra.length

for (var i=0; i<numpal;i++){
    erC.lastIndex = 0;
    if (erC.test(palabra[i])){
        contador ++
    }
}
console.log(contador)
*/

/*
3. Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.


var texto = "hola si adios no  alvaro alberto luis"
er = / /gi

document.write(texto.match(er))
*/

/*
4. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
*/
/*
var cadena = "hola (que tal (estas)"
er = /\(\w+\)/gi
document.write(cadena.match(er))
*/

/*
5. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
/*
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
var cadena = "alvaro,programador,24"
//er = /,[1-9]+/
er = /\d+/
console.log(cadena.match(er))
*/

/*
7. Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.
*/
/*
var cadena = "rgalvaro70gmail.com"
er = /\w+@\w+.\w+/
console.log(er.test(cadena))
*/

/*
8. Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....
*/


/*
9. Realiza un supertrim de una cadena, eliminando todos los espacios duplicados
*/
/*
var cadena = "  hay   espacios  duplicados     suu"
document.write(cadena.trim())
*/

/*
10. Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.


var cadena = "alavama las naranjas"
var contador = 0
for (i = 0; i <= cadena.length; i++){
    var letra = cadena.charAt(i)
    for (a = 0; a <= cadena.length; a++){
        if (letra == cadena.charAt(a)){
            contador ++
        }
    }
}
*/

/*
14. Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12
*/
/*
var er = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
var er2 = /^[0-2][0-9]:[0-5][0-9]$/
var hora = "3:24"
console.log(er2.test(hora))
*/
/*
12. Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
*/
/*
var er = /^([A-Z]|[a-z])([A-Z]|[a-z])([A-Z]|[a-z])-[0-9][0-9][0-9][0-9]$/
var matricula = "abc-1234"
console.log(er.test(matricula))
*/
/*
13. Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, no existe un código postal en España que empiece por 53 o superior.
*/
/*
var er = /^[0-5][0-2][0-9][0-9][0-9]$/
var postal = "53999"
console.log(er.test(postal))
*/

/*
15. Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)
*/
/*
er = /^\(\d{1,3},\d{1,3}\)$/
cadena = "(99,999)"
console.log(er.test(cadena))
*/




//MATH Y NUMBER

/*
Hacer un programa que muestre un menú de opciones con las siguientes operaciones posibles:
    Redondeo a su inmediato superior de un número
    Redondeo a su inmediato inferior de un número
    Redondeo al número más cercano
    Cálculo del número máximo entre dos dados
    Cálculo del número mínimo entre dos dados
    Cálculo de un número elevado a otro
    Cálculo de la raíz cuadrada de un número
*/

/*
var accion = prompt("escribe una accion")
var n1 = prompt("escribe un numero")
var n2 = prompt("escribe un numero")

if (accion == "superior"){
    console.log(Math.ceil(n1))

}else if (accion == "inferior"){
    console.log(Math.floor(n1))

}else if (accion == "cercano"){
    console.log(Math.round(n1))

} else if (accion == "maximo"){
    console.log(Math.max(n1,n2))

} else if (accion == "minimo"){
    console.log(Math.min(n1,n2))

}else if (accion == "elevado"){
    console.log(Math.pow(n1,n2))

} else if (accion == "raiz"){
    console.log(Math.sqrt(n1))

} else {
    console.log(false)
}
*/

/*
2. 
*/
/*
var v = 14
var g = 9.8
var a = 45
var r = (2*Math.pow(v,2)*Math.sin(a)*Math.cos(a))/g
console.log(r)
*/

/*
3.
*/

/*
var t = prompt("escribe un numero")
var y = 2*Math.exp(2)-0.5*t*Math.sin(0.5*t)
while (t>=0 && t<=60) {
    docum(y)
    t = prompt("escribe un numero")
}
*/

/*
4. Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son:
    ➔ 50% para que salga 1
    ➔ 30% para que salga x
    ➔ 20% para que salga 2
*/
/*
var numero = Math.random() 
var n = 5
for (i=1; i<=n; i++){
    if (numero  >= 0 && numero < 0.5) {
        console.log(1)
    } else if(numero>=0.5 && numero<0.8){
        console.log("X")
    } else {
        console.log(2)
    }
    numero = Math.random() 
}
*/

/*
5. Generar aleatoriamente una primitiva de n columnas.
*/
/*
var numeros
var primitiva
var n = 5
for (i=1; i<=n; i++){
    numeros = Math.random()
    primitiva = numeros*100
    console.log(Math.round(primitiva))
}
*/   

/*
6. Realizar un programa que generalice el algoritmo del Tarot para un número de cualquier cantidad de cifras. Ejemplo: 999999999999999999999=9+.....9+9+9= 189 = 18 = 9.  (Pista: Usar log en base 10. No es obligatorio usarla)
*/


//DATE

/*
1. Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
*/
/*
var fecha_actual = new Date()
var fecha = new Date("1999-03-26")
if (fecha < fecha_actual){
    console.log(true)
} else {
    console.log(false)
}
*/
/*
2. Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.
*/
/*
var fecha1 = new Date("1995-05-23")
var fecha2 = new Date("1939-03-26")
if (fecha1 > fecha2) {
    document.write(fecha2," es anterior a ",fecha1)
} else {
    document.write(fecha1," es anterior a ",fecha2)
}

*/
/*
3. Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.
*/
/*
var tiempo = prompt("escribe un tiempo en segundos")
var segundos = parseInt(tiempo)
var minutos = 
var horas = 
document.write(horas,":",minutos,":",tiempo)
*/


/*
4. Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
*/
/*
var fecha1 = new Date("1995-05-23")
var fecha2 = new Date("1939-03-26")
if (fecha1 > fecha2) {
    //document.write(fecha2," es anterior a ",fecha1)
    //var fecha = fecha1 - fecha2
    var fecha = fecha1.getTime() - fecha2.getTime()
    document.write(fecha)
} else {
    //document.write(fecha1," es anterior a ",fecha2)
    //var fecha = fecha2 - fecha1
    var fecha = (fecha2.getTime() - fecha1.getTime())/1000
    document.write(fecha)
}
*/

/*
5. Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.
*/
/*
var fecha = prompt("escribe tu cumpleaños")
var cumple = new Date(fecha)
var dia = new Date()
if (cumple == dia) {
    document.write("¡Felicidades!")
} else {
    var diferencia = cumple.getTime() - dia.getTime()
    var dias = (diferencia / (1000 * 60 * 60 * 24))
    document.write(dias)
}
*/


/*
6. Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.
*/
/*
var fecha = new Date("2000-03-26")
var contador = 0
while (contador < 50) {
    console.log(fecha.getDay())
    fecha.setFullYear(fecha.getFullYear()+1)
    contador++
}
*/


//BOM

/*
    1. En una nueva ventana, imprimir todas las propiedades del objeto navigator.

    appName : almacena el nombre oficial del navegador.
    appCodeName : devuelve el nombre de código de la aplicación del navegador:
    appVersion : almacena la versión del navegador.
    cookieEnabled : almacena si las cookies están activas en el navegador.
    platform : almacena la plataforma donde el navegador se está ejecutando.
    plugins : almacena un array de los plugin cargados en el navegador.
    language devuelve el idioma del navegador.
    onLine devuelve verdadero si el navegador está en línea.
    javaEnabled() método devuelve verdadero si Java está habilitado.

*/
/*
document.write("appName: "+ navigator.appName + "<br>")   
document.write("appCodeName: "+ navigator.appCodeName + '<br>')   
document.write("appVersion: " + navigator.appVersion + "<br>" )
document.write("coockieEnabled: " + navigator.cookieEnabled + "<br>")
document.write("plugins: " + navigator.plugins.length + "<br>")
document.write("languaje: " + navigator.language + "<br>")
document.write('onLine :' + navigator.onLine + '<br>')
document.write('javaEnabled() :' + navigator.javaEnabled() + '<br>')
*/


/*
2. Escribir un script que mostrará el nombre del navegador , la versión y el sistema operativo que esté utilizando. Prueba tu programa en distintos navegadores, el objeto Navigator no está estandarizado.
*/
/*
var navInfo = window.navigator.appVersion.toLowerCase()
var so = 'Sistema Operativo'
function retornarSO()
{
	if(navInfo.indexOf('win') != -1)
	{
		so = 'Windows'
	}
	else if(navInfo.indexOf('linux') != -1)
	{
		so = 'Linux'
	}
	else if(navInfo.indexOf('mac') != -1)
	{
		so = 'Macintosh'
	}
	return so
}

document.write(navigator.appName + "<br>")
document.write(navigator.appVersion + "<br>")
document.write(retornarSO())
*/

/*
3. Crear dos enlaces, uno para abrir una nueva ventana y uno para cerrarla. La nueva ventana mostrará este mensaje en una fuente grande : ​”El ojo es la ventana a tu alma “. La nueva ventana se coloca en la esquina izquierda de la pantalla , será redimensionable , tendrá una barra de desplazamiento, y estará en primer plano.
*/

let miVentana; // Variable para almacenar la referencia a la ventana abierta

// Función para abrir una nueva ventana
document.getElementById('abrirVentana').addEventListener('click', function() {
    miVentana = window.open('', '_blank', 'width=400,height=200');
    miVentana.document.write('<p>Esta es una ventana emergente.</p>');
});

// Función para cerrar la ventana abierta
document.getElementById('cerrarVentana').addEventListener('click', function() {
    if (miVentana) {
        miVentana.close();
    }
});





























