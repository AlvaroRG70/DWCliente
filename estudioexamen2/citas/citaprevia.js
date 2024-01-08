class CitaPrevia{
    constructor(fecha, paciente, medico){
        this.fecha = fecha
        this.paciente = paciente
        this.medico = medico
    }

    imprimirCita(){
        let cadena = 'fecha: '+this.fecha.imprimirFecha() + ", " + 'paciente: '+ this.paciente.imprimirPaciente() + ", " + 'medico: ' +this.medico.imprimirMedico()
        return cadena
    }
}