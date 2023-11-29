var med1 = new Medico("Medico1","Curitas","20202020f",123)
var pac1 = new Paciente("Malito","Maloo","30303030f",123)

//console.log(med1.imprimir_medico())
//console.log(pac1.imprimir_paciente())

var cita = new CitaPrevia(new Date("2023-01-01T10:00:00"),pac1,med1)

//console.log(cita.imprimir_CitaPrevia())

var medico1 = new Medico("Dr. Smith", "Johnson", "12345678M", "F56789");
var medico2 = new Medico("Dr. García", "Martínez", "87654321N", "F98765");
var medico3 = new Medico("Dra. López", "Pérez", "13579246O", "F43210");
var medico4 = new Medico("Dr. Rodríguez", "Sánchez", "98765432P", "F87654");

var paciente1 = new Paciente("Juan", "Gómez", "11111111A", "A12345");
var paciente2 = new Paciente("María", "Rodríguez", "22222222B", "A67890");
var paciente3 = new Paciente("Carlos", "Martínez", "33333333C", "A13579");
var paciente4 = new Paciente("Laura", "García", "44444444D", "A24680");

// Crear array de Citasprevias

var cita1 = new CitaPrevia(new Date("2023-01-02T10:00:00"), paciente1, medico1)
var cita2 = new CitaPrevia(new Date("2021-01-03T14:30:00"), paciente2, medico2)
var cita3 = new CitaPrevia(new Date("2022-01-04T11:45:00"), paciente3, medico3)
var cita4 = new CitaPrevia(new Date("2022-01-05T16:20:00"), paciente4, medico4)

var listaCitas = [cita1, cita2, cita3, cita4]


var buscarCita = (cita,lista) => {
    cita = lista.find(c => c.paciente == cita.paciente)
    if (cita) {
        return cita
    } else {
        return -1
    }
}

var introduceCita = (cita,lista) => {
    
    if (buscarCita(cita,lista) != -1) {
        return "El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra"
    } else {
        lista.push(cita)
    }
}

//console.log(buscarCita(cita1,listaCitas))
//console.log(introduceCita(cita1,listaCitas), listaCitas)

var eliminarCita = (cita,lista) => {
    if (buscarCita(cita,lista) != -1) {
        var indice = lista.indexOf(buscarCita(cita,lista))
        lista.splice(indice, 1)
    } else {
        return "La cita no ha sido encontrada"
    }
}
//eliminarCita(cita1,listaCitas)
//console.log(listaCitas)

var mostrarCitas=(lista)=>{
    lista.forEach(cita => document.write(cita.imprimir_CitaPrevia() + "<br>"));
}
//mostrarCitas(listaCitas)

var ordenaCitasPorFechaHora = (lista) => {
    lista.sort((a,b)=>a.fechaHora-b.fechaHora)
}

//ordenaCitasPorFechaHora(listaCitas)
//console.log(listaCitas)