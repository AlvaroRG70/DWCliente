class Paciente extends Persona{
    constructor(nombre,apellido,dni, nafiliacion){
        super(nombre,apellido,dni)
        this.nafiliacion = nafiliacion
    }
    imprimirPaciente(){
        let cadena = this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.nafiliacion
        return cadena
    }
}