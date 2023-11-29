class Integrante{
    constructor(dni,nombre,apellido){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido =apellido;
    }
    Mostrar(){
        let cadena = ""
        cadena += "dni: "+ this.dni + " Nombre: " + this.nombre + " Apellido: " + this.apellido
        return cadena
    }
}