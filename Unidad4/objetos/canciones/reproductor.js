class Reproductor {
    constructor(arraycanciones, volumen = 20){
        this.arraycanciones = arraycanciones
        this.volumen = volumen
    }
    aumentaVolumen(){
        this.volumen += 1
        return this.volumen
    }
    disminuyeVolumen(){
        this.volumen -= 1
        return this.volumen
    }

    anyadecancion(cancion){
        let busqueda = this.anyadecanciones.find((can)=> can.titulo == cancion.titulo)
        if (busqueda == undefined){
            this.arraycanciones.push(cancion)
        }
    }

    anyadeCancion2(cancion){
        for (let tema of this.arraycanciones){
            if (tema.titulo =! cancion.titulo){
                this.arraycanciones.push(cancion)
            }
        }
    }

    eliminaCancion(cancion){
        this.arraycanciones = this.arraycanciones.filter(elemento => elemento.titulo !== cancion.titulo);
    }

    mostrarLista(){
        for (cancion of this.arraycanciones){
            document.write(cancion.mostrarCancion())
        }
    }

    mostrarVolumen(){
        return this.volumen
    }

    buscarCancion(cancion){
        let posicion = this.arraycanciones.indexOf(cancion)
        return posicion
    }

    ordenarCancionDesc(){
        let nombreordenado = this.arraycanciones.sort((a, b) => b.titulo.localeCompare(a.titulo))
        return nombreordenado
    }

}