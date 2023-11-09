/*
En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más conveniente. 
- Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
- Calcula el número total de alumnos matriculados en todos los módulos
*/

let modulos = new Map([["DWEC", ["Desarrollo Web en Entorno Cliente",6,14]],["DWS", ["Desarrollo Web en Entorno Servidor",9,15]],["DI", ["Diseño de interfaces",6,7]], ["DA", ["Diseño de Aplicaciones",5,7]]])
if (modulos.has("DWS")){
    let datos = modulos.get("DWS")
    console.log(datos[2])
}

sumatorio = 0
let valores = modulos.values()
for (let v of valores){
    sumatorio += v[2]
}
console.log(sumatorio)


//Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.

let arrayrepetida = (array) => {
    let lista = new Set(array)
    console.log(lista)
    return lista
}
let lista = [1,1,2,2,3,4,4,4,4,5,5,5,6,6,6,6]
arrayrepetida(lista)