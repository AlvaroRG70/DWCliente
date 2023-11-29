class Banda {
    constructor(nombre, anyo, listaintegrantes, telefono, estilo){
        this.nombre = nombre
        this.anyo = anyo
        this.listaintegrantes = listaintegrantes
        this.telefono = telefono
        this.estilo = estilo
    }

    mostrarBanda(){
        let cadena = this.nombre + ", " + this.anyo + ", " + this.listaintegrantes + ", " +  this.telefono + ", " + this.estilo
        document.write(cadena)
    }

    mostrarIntegrantes(){
        for (let integrante of this.listaintegrantes){
            let cadena = integrante.dni + ", " + integrante.nombre + ", " + integrante.apellido +"||"
            document.write(cadena)
        }
    }

    

}