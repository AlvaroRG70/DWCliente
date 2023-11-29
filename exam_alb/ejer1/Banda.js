class Banda{
    constructor(nombre,año,lista,telefono,estilo){
        this.nombre = nombre;
        this.año = año;
        this.lista = lista;
        this.telefono = telefono;
        this.estilo = estilo;
    }
    mostrarBanda(){
        let cadena = ""
        let cadena_integrantes = ""
        this.lista.forEach(integrante => cadena_integrantes+=integrante.Mostrar());
        cadena += "Nombre de la Banda: " + this.nombre + " Año de fundacion: " + this.año + " Integrantes: " + cadena_integrantes + " Telefono: " + this.telefono + " Estilo de la banda: " + this.estilo
        return cadena
    }
}