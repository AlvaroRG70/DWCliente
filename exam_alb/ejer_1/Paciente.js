class Paciente extends Persona{
    constructor(nombre,apellido,dni,afiliacion){
        super(nombre,apellido,dni);
        this.afiliacion = afiliacion;
    }
    imprimir_paciente(){
        var cadena = ""
        cadena += this.imprimir() + " " + this.afiliacion
        return cadena
    }
}