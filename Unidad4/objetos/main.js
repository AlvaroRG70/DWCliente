
/*
25. Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.
*/

class Punto2 {
    constructor (x,y) {
        this.x = x
        this.y = y
    }
    cuadrantePunto(){
        let cuadrante = 0
        if (this.x > 0 && this.y > 0){
            cuadrante = 1
            return cuadrante
        } else if (this.x < 0 && this.y > 0){
            cuadrante = 2
            return cuadrante
        } else if (this.x < 0 && this.y < 0){
            cuadrante = 3
            return cuadrante
        } else {
            cuadrante = 4
            return cuadrante
        }
    }
}

let coord1 = new Punto2(4,6)
console.log(coord1.cuadrantePunto())

let coord2 = new Punto2(-2,3)
console.log(coord2.cuadrantePunto())


/*
26. Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
*/

class Recatangulo2 {
    constructor (punto1,punto2) {
        this.punto1 = punto1
        this.punto2 = punto2

    }
    base(){
        return Math.abs(this.punto2.x - this.punto1.x)
    }
    altura() {
        return Math.abs(this.punto2.y - this.punto1.y)
    }
    perimetro(){
        return (2*this.base() + 2*this.altura())
    }
    area(){
        return this.base()*this.altura()
    }
}

let rectang = new Recatangulo2(coord1,coord2)
console.log(rectang.base())
console.log(rectang.altura())
console.log(rectang.perimetro())
console.log(rectang.area())








