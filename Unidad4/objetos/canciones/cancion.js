class Cancion{
    constructor(titulo, interprete){
        this.titulo = titulo
        this.interprete = interprete
    }
    mostrarCancion(){
        let muestra = this.titulo + "--" + this.interprete
        return muestra
    }
}