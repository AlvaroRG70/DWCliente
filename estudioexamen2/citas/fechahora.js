class FechaHora{
    constructor(fecha){
        this.fecha = fecha
    }

    imprimirFecha(){
        let cadena = this.fecha.toLocaleString()
        return cadena
    }
}