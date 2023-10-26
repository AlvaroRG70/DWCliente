/*
1. Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
*/
/*
var actual = new Date()
var fechanac = new Date("1999-03-26")
if (actual > fechanac){
    console.log("no es mayor a la actual")
} else{
    console.log("es mayor a la actual")
}

//otra forma

var actual = new Date()
var fechanac = new Date("1999-03-26")
if (actual.getTime()>fechanac.getTime()){
    console.log("no es mayor a la actual")
} else{
    console.log("es mayor a la actual")
}
*/

/*
2. Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.
*/

/*
var fecha1 = new Date("2012-03-26")
var fecha2 = new Date("1999-03-26")

if (fecha1 > fecha2) {
    console.log(fecha2)
} else {
    console.log(fecha1)
}
*/

/*
3. Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.
*/

var segundos = 10000
var horas = Math.floor(segundos/3600)
console.log(horas)
var restohoras = segundos%3600
var minutos = Math.floor(restohoras/60)
console.log(minutos)
segundos = segundos%60
console.log(segundos)


/*
4. Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
*/
/*
var fecha1 = new Date("2012-03-26")
var fecha2 = new Date("1999-03-26")

if (fecha1 > fecha2) {
    console.log(fecha2)
    var diferencia = fecha1 - fecha2
    console.log(diferencia/1000)
} else {
    console.log(fecha1)
    var diferencia = fecha2 - fecha1
    console.log(diferencia/1000)
}
*/

/*
5. Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.
*/

var actual = new Date()
var fechanac = new Date("1999-03-26")
if (fechanac == actual){
    console.log("Felicidades")
} else {
    var diferencia = actual - fechanac.setFullYear(actual.getFullYear())
    console.log(diferencia/(24 * 60 * 60 * 1000))
}

/*
6. Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario
*/
var fechanac = new Date("1999-03-26")
for (i = 0; i<50; i++){
    console.log(fechanac.getDay())
    fechanac.setFullYear(fechanac.getFullYear()+1)
}

