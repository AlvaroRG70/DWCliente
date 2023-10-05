


// //Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.
// let r =parseInt(prompt ("Escribe el radio"))
// let area = 4 * Math.pi * r^2
// console.log(area)
// let volumen = (4* Math.pi * r^2)/3
// console.log(volumen)
// //Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.
// let valor = parseInt(prompt("Esccribe un valor"))
// if (valor < 0){
//     valor = valor * -1
//     document.write(valor)
// } else {
//     document.write(valor)
// }
// //Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. 
// //Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.
// let dato = parseInt(prompt("Escribe un valor2"))
// if (dato==0) {
//     console.log("Error")
// } else {
//     dato = 1/dato
//     console.log(dato)
// }


// /*Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
// a. Es de día desde las 7:30 hasta las 14:00 horas.
// b. Es tarde desde las 14:01 hasta las horas 20:30.
// c. Es noche desde las 20:31 hasta las horas 7:29.*/
// let fecha = "21:00"
// if (fecha >= "07:30" && fecha <= "14:00"){
//     console.log("Buenos días")

// } else if (fecha >= "14:01" && fecha <= "20:30") {
//     console.log("Buenas tardes")

// } else {
//     console.log("Buenas noches")
// }
// /*
// Para comprobar si un año es o no bisiesto se usa la siguiente regla: 
// “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. 
// Diseñar un programa que utilizando una variable lógica que tenga valor cierto 
// si el año es bisiesto y falso si no lo es.*/


// let ano = 2023
// if (((ano % 400) == 0) || (((ano % 4) == 0) && ((ano % 100) != 0))){
//     console.log(true)
// } else {
//     console.log(false)
// }

// /*
// Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano y calcule e 
// imprima el cuadrante al que pertenece dicho punto. 
// También debe detectar cuando está en el origen o sobre un eje.
// */

// let x = 0
// let y = -4
// if (x > 0 && y>0){
//     console.log("Está en el primer cuadrante")
// } else if (x < 0 && y>0){
//     console.log("Está en el Segundo cuadrante")
// } else if (x < 0 && y<0){
//     console.log("Está en el tercer cuadrante")
// } else if (x > 0 && y<0){
//     console.log("Está en el cuarto cuadrante")
// } else if (x == 0){
//     console.log("Está sobre el eje x")
// } else if (y==0){
//     console.log("Está sobre el eje y")
// } else {
//     console.log("Está en el origen")
// }

// /*
// Diseñar un algoritmo para escribir en pantalla 
// los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.
// */

// let n = 3
// let suma = 0
// while (n > 0){
//     console.log(n,n**2,Math.pow(n,3))
//     suma = suma + n
//     n = n-1
// }
// console.log("la suma es",suma)

// /*
// Hallar el menor, el mayor y la media de
// un conjunto de números positivos leídos de teclado.
// */


// let divisor = 1
// let num2 = parseInt(prompt("escribe un número"))
// let suma2 = num2
// let mayor = num2
// let menor = num2
// let num3 = 0
// while (num3 != "fin"){
//     num3 = prompt("escribe otro número o fin para que pare") 
//     if (num3 != "fin") {
//         if (num3 > mayor) {
//             mayor = num3
//         } else {
//             menor = num3
//         }
//         suma2 = suma2 + parseInt(num3)
//         divisor++
//     }
// }

// let media = suma2/divisor
// console.log("el mayor es: ",mayor,", el menor es: ",menor,", la media es: ",media)

// /*
// Realizar un programa que proporcione el cambio de Euros a Dólares,
// Libras, Yenes, Franco Suizo, Corona Noruega, según opción. 
// El programa debe controlar todas las entradas y ofrecer al usuario 
// la posibilidad de repetir o salir.
// */

// let euro = parseInt(prompt("Escribe tu cantidad de euros"))
// let accion = prompt("Escribe el cambio que desea realizar")
// switch (accion){
//     case "Dolares":
//         console.log("Tu cantidad en Dolares es ",euro*1.05653)
//         break
//     case "Libras":
//         console.log("Tu cantidad en Libras es ",euro*0.86947)
//         break
//     case "Yenes":
//         console.log("Tu cantidad en Yenes es ",euro*157.5255)
//         break
//     case "Franco Suizo":
//         console.log("Tu cantidad en Franco Suizo es ",euro*0.96887)
//         break
//     case "Corona Noruega":
//         console.log("Tu cantidad en Corona Noruega es ",euro*11.42)
//         break
    
//     default:
//         console.log("No es una moneda válida")
// }


// /*
// Realizar un algoritmo que permita introducir la nota de una 
// asignatura por teclado, la valide para que esté comprendida entre
// 0 y 10 y se escriba en letras de la siguiente manera:
//     SUSPENSO si es menor que 5
//     APROBADO mayor que 5 y menor que 6
//     BIEN entre 6 y 7
//     NOTABLE entre 7 y 8
//     SOBRESALIENTE entre 9 y 10
// */

// let nota = parseFloat(prompt("Escribe la nota"))
// if (nota >= 0 && nota <= 10) {
//     if (nota >= 5 && nota < 6) { 
//         console.log("APROBADO")
            
//      } else if (nota >= 6 && nota < 7){
//         console.log("BIEN")
            
//      } else if (nota >= 7 && nota <= 8){
//         console.log("NOTABLE")
            
//      } else if (nota >= 9 && nota <= 10) {
//         console.log("SOBRESALIENTE")
//      } else {
//         console.log("SUSPENSO")
//     }
// } else {
//     console.log("Nota no válida")
// }

// /*
// Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y dé como resultado el número de Tarot. El programa verificará si la fecha es correcta. El número de Tarot se calcula sumando los números de la fecha de nacimiento y reduciéndolos a un único dígito. Por ejemplo, si su fecha de nacimiento es 20 de julio de 1984, el número de Tarot sería: 20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4
// */


// let dia = 1
// let mes = 3
// let anho = 2019
// let suma3 = 0

// let tarot = dia + mes + anho
// tarot = String(tarot)

// for (var i=0; i<4; i++) {
//     suma3 = suma3 + parseInt(tarot[i])
// }
// console.log("Número :",tarot, "y ", suma3)

// /*
// Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento donde se recoge si se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.
// */


// let sexo = prompt("Escribe el sexo")
// let sueldo = parseInt(prompt("Escribe el sueldo"))
// let sumasueldo = 0
// let contador = 0
// while (sexo != "*") {
//     if ((sexo == "M" || sexo == "H") && (sueldo >=1000 && sueldo <= 2000)){
//         sumasueldo = sumasueldo + sueldo
//         contador ++
//         sexo = prompt("Escribe el sexo")
//         if ((sexo == "M" || sexo == "H")){
//             sueldo = parseInt(prompt("Escribe el sueldo"))
//         }         
//     }
// }
// console.log(sumasueldo/contador)

/*
Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, calcule cuál es el número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero.
*/







