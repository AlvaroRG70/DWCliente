class Medico extends Persona{
    constructor(nombre,apellido,dni,facultativo){
        super(nombre,apellido,dni);
        this.facultativo = facultativo;
    }
    imprimir_medico(){
        var cadena = ""
        cadena += this.imprimir() + " " + this.facultativo
        return cadena
    }
}