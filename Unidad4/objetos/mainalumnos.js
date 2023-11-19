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

console.log(persona1.nombre)
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
let alumno1 = new Alumno("Alberto", "Caro", "49144317A", "1979-04-24", "1"


let Aula = 