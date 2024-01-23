let fechahora1 = new Date("2023/12/12")
let fechahora2 = new Date("2023/12/23")



let fechahora3 = new Date("2023/12/02")
let fechahora4 = new Date("2023/11/22")



let cita1 = new Cita("sala1", fechahora1)
let cita2 = new Cita("sala2", fechahora2)
let cita3 = new Cita("sala6", fechahora3)
let cita4 = new Cita("sala1", fechahora4)
/*
cita1.mostrarCita()
*/
let citapend=[cita1]
let citahistorial = [cita3, cita4]


let cliente1 = new Cliente("Alvaro", "Rodriguez", "29384756E", citapend, citahistorial)

cliente1.crearCita(cita2)
cliente1.crearCita(cita3)
console.log(cliente1.listapendientes)


cliente1.Recordatorio()
