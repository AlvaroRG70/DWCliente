let persona1 = new Persona("Alvaro", "Rodriguez", "49166317E", "1999-03-26")
console.log(persona1.imprimirDatos())
let persona2 = new Persona("Alberto", "Caro", "49144317A", "1979-04-24")
let persona3 = new Persona("Luis", "Vazquez", "39166317U", "2000-11-14")
let persona4 = new Persona("Elvis", "maro", "382736483R", "1999-03-26")


let listapersona = [persona1,persona2]
// buscamos persona por apellido
buscarPersonaAp = (apellido,array) => array.find((persona) => persona[1]==apellido)

// buscamos persona por DNI
buscarPersonaDNI = (dni,array) => array.find((persona) => persona[2]==dni)

// buscamos persona por edad
let edad = (fecha) => {
    let fecha1 = new Date(fecha)
    let actual = new Date()
    let miliseg = actual - fecha1
    let anyo = Math.floor(miliseg/(1000 * 60 * 60 * 24 * 365.25))
    return anyo
}

buscarPersonaEdad = (edad,array) => array.find((persona) => edad(persona[3])==edad)

let personaencotrada = buscarPersonaAp('rodriguez',listapersona)
console.log(personaencotrada)