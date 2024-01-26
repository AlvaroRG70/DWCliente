class Cita{
    constructor(sala, fechahora){
        this.sala = sala
        this.fechahora = fechahora
    }
    mostrarCita(){
        let cadena = "Sala: " + this.sala + "Fecha: " + this.fechahora.toLocaleString()
        document.write(cadena)
    }
}