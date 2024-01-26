class Banda{
    constructor(nombre, anyo, listaintegr, telefono, estilo){
        this.nombre = nombre
        this.anyo = anyo
        this.listaintegr = listaintegr
        this.telefono = telefono
        this.estilo = estilo
    }

    mostrarBanda(){
        let cadena = this.nombre + ", " + this.anyo + ", " + this.listaintegr + ", " + this.telefono + ", " + this.estilo 
        document.write(cadena)
    }

    mostrarIntegrantes(){
        let cadena = ""
        for (let integrante of this.listaintegr){
            cadena += integrante.dni+ ", " + integrante.nombre+ ", "  + integrante.apellido + "<br>"
        }
        document.write(cadena)
    }

    
}