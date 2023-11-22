let piloto1 = new Calificacion({nombre: "Alvaro", escuderia: "Ferrari"}, 1000)
let piloto2 = new Calificacion({nombre: "Alberto", escuderia: "Renault"}, 3000)
let piloto3 = new Calificacion({nombre: "Ivan", escuderia: "Mclaren"}, 2000)
let piloto4 = new Calificacion({nombre: "Elvis", escuderia: "Alpine"}, 4000)

let listapilotos = [piloto1,piloto2,piloto3,piloto4]
console.log(piloto1.piloto.nombre)

/* Esto lo hacemos cando usamos clave valor
let ordenarTiempo = (lista) =>{
    let listaordenada = lista.sort((a, b) => {return a.tiempo - b.tiempo})
    let listafinal = []
    for (let piloto of listaordenada){
        
        for ([clave,valor] of piloto.piloto){
            listafinal.push(clave)
            listafinal.push(valor)
        }
        listafinal.push(piloto.tiempo)
    }
    return listafinal
}
*/

let ordenarTiempo = (lista) =>{
    let listaordenada = lista.sort((a, b) => {return a.tiempo - b.tiempo})
    let listafinal = []
    for (let piloto of listaordenada){
        listafinal.push(piloto.piloto.nombre)
        listafinal.push(piloto.piloto.escuderia)
        listafinal.push(piloto.tiempo)
    }
    return listafinal   
}


let ordenarNombre = (lista) =>{
    let listaordenada = lista.sort((a, b) => {return a.piloto.nombre.localeCompare(b.piloto.nombre)})
    let listafinal = []
    for (let piloto of listaordenada){
        listafinal.push(piloto.piloto.nombre)
        listafinal.push(piloto.piloto.escuderia)
        listafinal.push(piloto.tiempo)
    }
    return listafinal  
}

//console.log(ordenarNombre(listapilotos))

//sesion de calificacion en caso de que no exista el piloto

let anyadirPiloto = (array, piloto, tiempo) => {

    for (let persona of array){
        if (persona.piloto.nombre =! piloto.nombre){
            array.push(new Calificacion(piloto, tiempo))
        } else if (persona.piloto.nombre == piloto.nombre) {
            if (persona.tiempo > tiempo){
                persona.tiempo = tiempo
            }
        }
        return array
    }
    
}

let anyadirPiloto2 = (array, piloto, tiempo) => {
    let encontrado = false;

    for (let persona of array) {
        if (persona.piloto.nombre == piloto.nombre) {
            encontrado = true;
            if (persona.tiempo > tiempo) {
                persona.tiempo = tiempo;
            }
            break; // Salir del bucle una vez que se ha encontrado y actualizado el tiempo
        }
    }

    if (!encontrado) {
        array.push(new Calificacion(piloto.piloto, tiempo));
    }

    return array;
};


console.log(anyadirPiloto2(listapilotos, {nombre: "Alvaro", escuderia: "Ferrari"}, 200))

