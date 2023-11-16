
/*
25. Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.
*/



let coord1 = new Punto(4,6)
console.log(coord1.cuadrantePunto())

let coord2 = new Punto(-2,3)
console.log(coord2.cuadrantePunto())


/*
26. Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
*/

let rectang = new Rectangulo(coord1,coord2)
console.log(rectang.base())
console.log(rectang.altura())
console.log(rectang.perimetro())
console.log(rectang.area())








