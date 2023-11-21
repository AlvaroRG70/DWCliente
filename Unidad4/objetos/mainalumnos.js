let persona1 = new Persona("Alvaro", "Rodriguez", "49166317E", "1999-03-26")
//console.log(persona1.imprimirDatos())
let persona2 = new Persona("Alberto", "Caro", "49144317A", "1979-04-24")
let persona3 = new Persona("Luis", "Vazquez", "39166317U", "2000-11-14")
let persona4 = new Persona("Elvis", "maro", "382736483R", "1999-03-26")


let listapersona = [persona1,persona2, persona3, persona4]
//console.log(listapersona)

// buscamos persona por apellido
buscarPersonaAp = (apellido,array) => array.find((persona) => persona[1]==apellido)

let buscarApellido = (apellido, array) => {
    for (let persona of array){
        if (persona.apellido == apellido){
            return persona
        }
    }
}

//console.log(persona1.nombre)
// buscamos persona por DNI
buscarPersonaDNI = (dni,array) => array.find((persona) => persona[2]==dni)

let buscarDNI = (dni, array) => {
    for (let persona of array){
        if (persona.dni == dni){
            return persona
        }
    }
}

// buscamos persona por edad

let edad = (fecha) => {
    let fecha1 = new Date(fecha)
    let actual = new Date()
    let miliseg = actual - fecha1
    let anyos = Math.floor(miliseg/(1000 * 60 * 60 * 24 * 365.25))
    return anyos
}

let buscarEdad = (edad,array) => {
    for (let persona of array){
        if (edad(persona.fecha) == edad) {
            return persona
        }
    }
}

//Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
let map1 = new Map([["DWC",7],["DWS",8],["DI",5]])
console.log(map1.values())



let alumno1 = new Alumno("Alberto", "Caro", "49144317A", "1979-04-24", "1", "primero", new Map([["DWC",7],["DWS",8],["DI",5]]))
let alumno2 = new Alumno("Alvaro", "Rodriguez", "49166317E", "1999-03-26", "segundo", new Map([["DWC",5],["DWS",8],["DI",6]]))
let alumno3 = new Alumno("Luis", "Vazquez", "39166317U", "2000-11-14", "segundo", new Map([["DWC",4],["DWS",7],["DI",5]]))
let alumno4 = new Alumno("Elvis", "maro", "382736483R", "1999-03-26", "segundo", new Map([["DWC",5],["DWS",6],["DI",5]]))
console.log(alumno1.imprimirAlumno())



/*
let listaalumnos = [alumno1,alumno2,alumno3,alumno4]

let aula1 = new Aula(listaalumnos)
console.log(aula1.buscarAlumno2("Alberto"))
*/





