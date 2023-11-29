class CitaPrevia{
    constructor(fecha, paciente, medico){
        this.fecha = fecha
        this.paciente = paciente
        this.medico = medico
    }

    imprimirCita(){
        let cadena = this.fecha.imprimirFecha() + ", " + this.paciente.imprimirPaciente() + ", " + this.medico.imprimirMedico()
        return cadena
    }
}