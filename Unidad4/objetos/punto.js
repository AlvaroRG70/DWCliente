class Punto {
    constructor (x,y) {
        this.x = x
        this.y = y
    }
    cuadrantePunto(){
        let cuadrante = ""
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