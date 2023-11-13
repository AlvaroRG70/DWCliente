/*
Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

-Muestra cuántos módulos hay almacenados
-Muestra el contenido de la estructura
-Devuelve las abreviaturas de todos los módulos guardados
-Devuelve el nombre completo de todos los módulos
-Consulta si está el módulo "DAW"
-Si está, elimínalo.
-Ordena alfabéticamente el map según las abreviaturas de los módulos

*/

let modulos = new Map([["DWEC", "Desarrollo Web en Entorno Cliente"],["DWES", "Desarrollo Web en Entorno Servidor"],["DI", "Diseño de interfaces"], ["DA", "Diseño de Aplicaciones"]])

//Muestra cuántos módulos hay almacenados

let claves = modulos.keys()
let cantidad = 0
for (let a of claves){
    cantidad += 1
}
console.log(cantidad)

//Muestra el contenido de la estructura

let valores = modulos.values()
for (let v of valores){
    console.log(v)
}

//Devuelve las abreviaturas de todos los módulos guardados
let claves2 = modulos.keys()
for (let c of claves2){
    console.log(c)
}

//Consulta si está el módulo "DWES". Si está, elimínalo.

if (modulos.has("DWES")){
    modulos.delete("DWES")
}
console.log(modulos)

// Ordena alfabéticamente el map según las abreviaturas de los módulos
let lista = []
let claves3 = modulos.keys()
for (let c of claves3){
    lista.push(c)
}

console.log(lista)
let listaord = lista.sort()
console.log(listaord)

//No ordena números bien
let lista2 = [2,"1","a","d",4, "b",3]
console.log(lista2.sort())

//ordena números de menor a mayor
let lista3 = [3,44,33,66,675,1,10]
console.log(lista3.sort((a,b)=>a-b))

//ordena números de mayor a menor
let lista4 = [3,44,33,66,675,1,10]
console.log(lista4.sort((a,b)=>b-a))