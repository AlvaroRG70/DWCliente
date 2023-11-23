let piloto1 = new Piloto("Alvaro","Ferrari")
let piloto2 = new Piloto("Alberto", "Renault")
let piloto3 = new Piloto("Ivan","Mclaren")
let piloto4 = new Piloto("Elvis", "Alpine")


let calificacion1 = new Calificacion(piloto1, 1000)
let calificacion2 = new Calificacion(piloto2, 3000)
let calificacion3 = new Calificacion(piloto3, 2000)
let calificacion4 = new Calificacion(piloto4, 4000)

let listapilotos = [calificacion1,calificacion2,calificacion3,calificacion4]
console.log(calificacion1.piloto.nombre)

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
        if (persona.piloto.nombre != piloto.nombre){

            array.push(new Calificacion(piloto, tiempo))

        }else if (persona.piloto.nombre == piloto.nombre) {
            console.log("encontrado")
            if (persona.tiempo > tiempo){
                persona.tiempo = tiempo
            }
        }
        
    }
    return array
}

let anyadirPiloto2 = (array, piloto, tiempo) => {
    let encontrado = false;

    for (let persona of array) {
        if (persona.piloto.nombre == piloto.nombre) {
            encontrado = true;
            console.log("encontrado")
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

let piloto5 = new Piloto("Alvaro", "Alpine")
console.log(anyadirPiloto(listapilotos, piloto5, 200))

