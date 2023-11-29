let persona1 = new Persona("alvaro", "rodriguez", 154234)
let persona2 = new Persona("alberto", "caro", 234234)
let persona3 = new Persona("ivan", "guerra", 3141243)
let persona4 = new Persona("irene", "sanchez", 45566)

let paciente1 = new Paciente("alvaro", "rodriguez", "154234", 234242)
let paciente2 = new Paciente("alberto", "caro", "234234", 12313)
let medico1 = new Medico("ivan", "guerra", "3141243", 234242)
let medico2 = new Medico("irene", "sanchez", "45566", 234242)

console.log(paciente1.imprimirPaciente())

console.log(medico1.imprimirMedico())

let fechahora1 = new FechaHora(new Date("2023/12/12"))
let fechahora2 = new FechaHora(new Date("2023/12/23"))
let fechahora3 = new FechaHora(new Date("2023/12/04"))
let fechahora4 = new FechaHora(new Date("2023/12/22"))

console.log(fechahora1.imprimirFecha())

let cita1 = new CitaPrevia(fechahora1, paciente2, medico1)
let cita2 = new CitaPrevia(fechahora2, paciente1, medico1)
let cita3 = new CitaPrevia(fechahora3, paciente2, medico2)
console.log(cita1.imprimirCita())

let listacitas = [cita1, cita2]
let listacitas2 = [cita1, cita3]

let introduceCita = (lista, citanueva) => {
    let busqueda = lista.find((cita)=>cita.paciente.nombre == citanueva.paciente.nombre)
    if (busqueda == undefined){
        lista.push(citanueva)
        return lista
    } else {
        let cadena = "Debes borrar la cita con ese paciente"
        return cadena
    }
}

console.log(introduceCita(listacitas, cita3))
console.log(introduceCita(listacitas2, cita2))

let eliminarCita = (lista, citanueva) => {
    let busqueda = lista.find((cita)=>cita == citanueva)
    if (busqueda){
        let listanueva = lista.filter((cita)=>cita != citanueva)
        lista = listanueva
        return lista
    } else {
        let cadena = "No hay citas"
        return cadena
    }
}
let listacitas3 = [cita1, cita3, cita2]
let listacitas4 = [cita1, cita3]

console.log(eliminarCita(listacitas3, cita2))
console.log(listacitas4)

let buscarCita = (lista, nombre) => {
    let busqueda = lista.find((cita)=>cita.paciente.nombre == nombre)
    return busqueda
}

console.log(buscarCita(listacitas3, "alvaro"))

let mostratCitas = (lista) => {
    for (let cita of lista) {
        console.log(cita.imprimirCita())
    }   
}

mostratCitas(listacitas3)

let ordenaCitasPorFechaHora = (lista) => {
    let listaordenada = lista.sort((citaA, citaB) => citaA.fecha - citaB.fecha)
    return listaordenada
}


/*
let ordenaCitasPorFechaHora2 = (lista) => {
    let listaordenada = lista.sort((citaA, citaB) => {
        const fechaHoraA = citaA.fecha.getTime();
        const fechaHoraB = citaB.fecha.getTime();
        // Comparación de fechas y horas
        return fechaHoraA - fechaHoraB;
    });
    return listaordenada
}
*/


console.log(ordenaCitasPorFechaHora(listacitas))





