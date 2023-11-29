class Medico extends Persona{
    constructor(nombre,apellido,dni, nfac){
        super(nombre,apellido,dni)
        this.nfac = nfac
    }
    imprimirMedico(){
        let cadena = this.nombre + ", " + this.apellido + ", " + this.dni + ", " + this.nfac
        return cadena
    }
}

