class Recatangulo {
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