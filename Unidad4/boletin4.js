/*
1. Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es. 
*/

function esPerfecto(numero){
    var divisores = []
    var suma = 0
    for (i=1; i < numero; i++){
        if (numero%i == 0) {
            divisores.push(i)
        }
    }
    for (i=0; i < divisores.length; i++){
        suma = suma + divisores[i]
    }
    if (suma == numero){
        console.log(true)
    } else {
        console.log(false)
    }
}

esPerfecto(6)

/*
2. Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.
*/

function esAlfabetoEspanol(texto) {
    var er = /ñ/gm
    if (er.test(texto)){
        console.log(true)
    } else {
        console.log(false)
    }
}

esAlfabetoEspanol("hola buenos dias esto es un ejercicio de js en esppañol")


/*
3. Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. Utiliza el operador spread.
*/
// usamos el spread que lo que hacae es separar los caracteres en una lista
function numCifras(numero){
    cifras = (numero.toString()).length
    console.log(cifras)
}

numCifras(2333333)

/*
4. Realizar una función que pase una cantidad de Mbyte, Kbytes y bytes a bytes. Probadla en una página.
*/

function pasarBytes(cantidad, tamanyo){
    var bytes = 0
    if (tamanyo == "Mbyte"){

        bytes = cantidad*1000000
        console.log(bytes) 
    } else if (tamanyo == "Kbyte"){

        bytes = cantidad*1000
        console.log(bytes) 
    } else if (tamanyo == "byte"){

        console.log("Ya esta en bytes")
    } else {

        console.log("No es un tamaño correcto")
    }
}

pasarBytes(200, "Mbyte")


/*
5. Hacer un programa para generar el siguiente primo a uno dado. Deben usarse funciones. 
*/

function primo(numero){
    var divisores = []
    for (i=1; i<=numero; i++){
        if (numero%i == 0){
            divisores.push(i)
        }
    }
    
    if (divisores.length == 2){
       return true
    } else {
        return false 
    }
}


function siguientePrimo(numero){
    numero += 1
    while (primo(numero) == false){
        numero ++
    }
    console.log(numero)
}
siguientePrimo(11)



/*
6. Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.
*/

function numeroArgumentos(...argumentos){
    console.log(argumentos.length)
}

numeroArgumentos(1,2,3,4,5,5,6,7,7,77,7,7,7,7,7,7)


/*
7. Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.
*/

function numeroMayorMenor(listanum){
    var menor = Math.min(...listanum)
    var mayor = Math.max(...listanum)
    console.log(menor)
    console.log(mayor)
}

numeroMayorMenor([1,2,3,4,5,6])

/*
8. Realizar la función esPalindromo(cadena) de manera recursiva. 
*/

/*
9. Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.
*/

/*
a. Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.
*/
function elMenor(...argumento) {
    console.log(Math.min(...argumento))
}

elMenor(2,1,4,5,0)

let elMenor3 = (...argumento) => {
    console.log(Math.min(...argumento))
}

let elMenor2 = (...argumento) =>  Math.min(...argumento)

console.log(elMenor2(2,1,2,3,4))
/*
b. Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array. 
*/

function colocaEnMedio(array1, array2){
    array1.push(...array2)
    console.log(array1)
}
colocaEnMedio([1,2,3,4],[1,2,3,4])

let colocaEnMedio2 = (array1, array2) => {
    array1.push(...array2)
    console.log(array1)
}
colocaEnMedio2([1,2,3,4],[1,2,3,4])

/*
c. Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.
*/

function uneArrays(...array){
    var lista = [] 
    for (i in array){
        lista.push(...array[1])
    }
    console.log(lista)
}
uneArrays([1,2,3,4],[1,2,3,4])

let uneArrays2 = (...array) => {
    var lista = [] 
    for (i in array){
        lista.push(...array[1])
    }
    console.log(lista)
}
uneArrays2([1,2,3,4],[1,2,3,4], [1,2,3,4])


/*
d. Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
*/

function sumaArgPares(...argumentos){
    var pares = []
    for (i=0; i<argumentos.length; i++){
        if (argumentos[i]%2 == 0){
            pares.push(argumentos[i])
        }
    }
    var suma = 0
    for (i in pares){
        suma += pares[i]
    }
    console.log(suma)
}

sumaArgPares(8,8)

let sumaArgPares2 = (...argumentos) => {
    var pares = []
    for (i=0; i<argumentos.length; i++){
        if (argumentos[i]%2 == 0){
            pares.push(argumentos[i])
        }
    }
    var suma = 0
    for (i in pares){
        suma += pares[i]
    }
    console.log(suma)
}

/*
10. Refactoriza el siguiente código usando funciones flecha.
*/
/*
a. Asegúrate de que la función se llama tripleAndFilter.
*/

function tripleAndFilter2(arr){
    return arr.map(function(value){
            return value * 3;
         }).filter(function(value){
           return value % 5 === 0;
      })
}

let tripleAndFilter = (arr) => {
    return arr.map((value) => {
        return value * 3
    }).filter((value) => {
        return value % 5 ===0
    })
}

console.log(tripleAndFilter([1,2,3,10,5,6]))

/*
b. 
*/

function doubleOddNumbers2(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}

let doubleOddNumbers = (array) => {
    return array.filter((val) => {
        return val % 2 !== 0
    }).map((val) => {
        return val * 2
    })
}

console.log(doubleOddNumbers([1,2,3,4,5,6,7]))

/*
c. 
*/

function bar2(){ 
    let txt = ''; 
    for(let i in arguments){ 
    txt += arguments[i];
    } 
    return txt;
}

let bar = (...arguments) => {
    let txt = ""
    for (let i in arguments){
        txt += arguments[i]
    }
}

console.log(bar(1,2,3,4,5))






//prueba

const array = [6,2,3,4,50]
for (let item of array) {
    console.log(item)
}




/*
11. Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e imprima por pantalla dichos números y su suma. 
*/

let extraNum = (cadena) => {
    let er = /[0-9]/gm
    let listanum = cadena.match(er)
    let suma = 0
    console.log(listanum)
    for (let i of listanum){
        suma += parseInt(i)
    }
    console.log(suma)
}

extraNum("hola 2 sfbs 2 3 fdjsf 4")


/*
13. Realizar una función que rellene un matriz de orden N de número aleatorios. 
*/



let matriz = (orden) => {
    let matriz = []
    for (let i = 0; i < orden; i++) {
        let fila = []
        for (let a = 0; a < orden; a++) {
            let random = Math.floor(Math.random() * 100)
            fila.push(random)
        }
        matriz.push(fila)
    }
    console.log(matriz)
    return matriz
}

matriz(4)

/*
14. Realizar un programa que permita introducir 2 matrices (hasta tamaño 3x3), y nos de la opción de sumarlas o multiplicarlas. El programa imprimirá las dos matrices y la matriz resultante (si la hubiera). 
*/

let sumaMatriz = (matriz1, matriz2) => {
    let orden = matriz1.length
    let matriznueva = []
    for (let a = 0; a < orden; a++) {
        let fila = []
        suma = 0
        for (let b = 0; b < orden; b++) {
            suma += matriz1[a][b] + matriz2[a][b]
            fila.push(suma)
        }
        matriznueva.push(fila)
    }
    return matriznueva
}


let productoMatriz = (matriz1, matriz2) => {
    let orden = matriz1.length
    let matriznueva = []
    for (let a = 0; a < orden; a++) {
        let fila = []
        let suma = 0
        for (let b = 0; b < orden; b++) {
            suma += matriz1[a][b] * matriz2[b][a]
            fila.push(suma)
        }
    matriznueva.push(fila)
    }
    return matriznueva
}


let operacionMatriz = (operacion, matriz1, matriz2) => {
    if (operacion.toUpperCase() == "SUMA"){
        console.log(matriz1)
        console.log(matriz2)
        console.log(sumaMatriz(matriz1, matriz2))
    } else if (operacion.toUpperCase() == "PRODUCTO"){
        console.log(matriz1)
        console.log(matriz2)
        console.log(productoMatriz(matriz1, matriz2))
    } else {
        console.log(false)
    }
}
mat1 = matriz(3)
mat2 = matriz(3)
operacionMatriz("suma",mat1,mat2 )
operacionMatriz("producto",mat1,mat2 )

/*
17. Realizar un script que tome una serie de palabras ingresadas por el usuario (separadas por coma) y almacena esas palabras en un array. Posteriormente, manipule el array para mostrar en una nueva ventana los siguientes datos: 
    La primera palabra ingresada por el usuario 
    La última palabra ingresada por el usuario
    El número de palabras presentes en el array
    Todas las palabras ordenadas alfabéticamente 
*/

let palabrasSeparadas = (cadena) => {
    let array = cadena.split(",")
    let primerapalabra = array[0]
    let numeropal = array.length
    let ultimapalabra = array[numeropal - 1]
    let ordenadas = array.sort()

    console.log(primerapalabra)
    console.log(numeropal)
    console.log(ultimapalabra)
    console.log(ordenadas)

}


palabrasSeparadas("hola,eres,alvaro,si,no")


/*
18. Resolver el problema del cambio (devolución mínima de monedas y billetes) utilizando arrays, evitando la duplicidad de estructuras de control alternativo. 
*/

let cambioMoneda = (cantidad, listacambio) => {
    cambio = []
    for (i = 0; i < listacambio.length; i++) {
        while (cantidad>=listacambio[i]) {
            cambio.push(listacambio[i])
            cantidad -= listacambio[i]
        }
    }
    console.log(cambio)
}

cambioMoneda(2542,[500,200,100,50,20,10,5,2,1])

/*
19. Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
*/

let datosUsuario = (cadena) => {
    let arrayfinal = []
    while (cadena != "" ) {
        let datos = cadena.split(",")
        arrayfinal.push(datos)
        cadena = prompt("introduzca datos separado por comas")
    }
    console.log(arrayfinal)
    return arrayfinal
}

let cadena1 = prompt("introduzca datos separado por comas")
datosUsuario(cadena1)

/*
20. Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?
*/


let imprimirDatos = (datos) => {
    for (let i of datos)
        document.write(i + " ")
}


buscarPersonaAp = (apellido,array) => array.find((persona) => persona[1]==apellido)

buscarPersonaDNI = (dni,array) => array.find((persona) => persona[2]==dni)

let edad = (fecha) => {
    let fecha1 = new Date(fecha)
    let actual = new Date()
    let miliseg = actual - fecha1
    let anyo = Math.floor(miliseg/(1000 * 60 * 60 * 24 * 365.25))
    return anyo
}

buscarPersonaEdad = (edad,array) => array.find((persona) => edad(persona[3])==edad)


/*
21. Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
*/

/*
a. mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
*/
let mayorEdad = (array) => {
    for (let i of array) {
        if (edad(i[3]) >= 18){
            console.log(i)
        }
    }
}

/*
b. menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
*/
let menor = (array) => {
    for (let i of array) {
        if (edad(i[3]) < 18){
            let anyos = 18 - edad(i[3])
            console.log(anyos)
        }
    }
}

/*
c. modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
*/

let modificaDatos = (datoacambiar, valor, array) => {
    if (datoacambiar = "Nombre") {
        
    } else if (datoacambiar = "Apellido") {

    } else if (datoacambiar = "DNI") {

    } else{

    }
}

/*
d. eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 
*/

let eliminaUsuario = (dni, array) => {
    if (buscarPersonaDNI(dni,array)){
        if ()
    }
}