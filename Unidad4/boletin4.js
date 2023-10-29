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

let elMenor2 = (...argumento) => {
    console.log(Math.min(...argumento))
}

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
