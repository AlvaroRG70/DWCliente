class CitaPrevia{
    constructor(fechaHora,paciente,medico){
        this.fechaHora = fechaHora;
        this.paciente = paciente;
        this.medico = medico;
    }
    imprimir_CitaPrevia(){
        var cadena = ""
        cadena += this.fechaHora + " " + this.paciente.imprimir_paciente() + " " + this.medico.imprimir_medico() + " "
        return cadena
    }
}