class Persona {
    constructor(nombre,apellido,dni,fechanac){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fechanac = fechanac
    }
    imprimirDatos() {
        let cadena = this.nombre + " " + this.apellido + " " + this.dni + " " + this.fechanac
        return cadena
    }

}

