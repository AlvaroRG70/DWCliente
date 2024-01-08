/*
Escribir un programa con una función en JavaScript que tome
como parámetros una fecha y un intervalo de tiempo en segundos. Por ejemplo:
cuentaAtras("10/03/2023", 60);
La función deberá utilizar expresiones regulares para validar que la fecha se encuentre en

el formato "dd/mm/yyyy". A continuación, calculará la diferencia de tiempo en segundos
entre la fecha actual y la fecha proporcionada como parámetro. Luego, la función deberá
mostrar en la consola la cantidad de segundos que faltan para que se cumpla la fecha
proporcionada, actualizándose cada dos segundos. Esta cuenta atrás parará cuando el
intervalo de tiempo pasado como parámetro se haya cumplido. Si la cuenta atrás llega a
cero, se deberá parar la actualización y mostrar en la consola un mensaje indicando que
el tiempo ha expirado.
Si la fecha dada ha pasado ya, se informará al usuario, y terminará el programa.


*/


let fecha1 = new Date("2023/10/01")
console.log(fecha1)
let cuentaAtras = (fecha, tiempo) => {
    
    let fecha_formateo = fecha.getDate() + "/" + fecha.getMonth() + "/" +  fecha.getFullYear() 
    console.log(fecha_formateo) 
    let er = /(\d{2})\/(\d{2})\/(\d{4})/
    let valido = er.test(fecha_formateo)
    if (valido){
        let fecha_hoy = new Date()
        let diferencia = (fecha_hoy - fecha)/1000
        setInterval(()=>{
            if (tiempo > 0){
                let segundos_faltan = diferencia - 1
                console.log("faltan ${segundos_faltan} segundos")
                if (diferencia = 0){
                    console.log("la fecha ha sido completada")
                    clearInterval()   
                }
                tiempo --

            } else{
                console.log("el tiempo ha expirado")
                clearInterval()
            }
        },2000)
    }
}



let cuentaAtras2 = (fechacadena, tiempo) => {
    
    let er = /(\d{2})\/(\d{2})\/(\d{4})/
    let valido = er.test(fechacadena)
    if (valido){

        let lista = fechacadena.match(er)

        let dia = lista[1]
        let mes = lista[2]
        let anio = lista[3]

        let fecha_formateo = new Date(anio, mes, dia)
        let fecha_hoy = new Date()
        let diferencia = (fecha_hoy - fecha_formateo)/1000

        setInterval(()=>{
            if (tiempo > 0){

                let segundos_faltan = diferencia - 1
                console.log("faltan ${segundos_faltan} segundos")

                if (diferencia = 0){

                    console.log("la fecha ha sido completada")
                    clearInterval()   
                }
                tiempo --

            } else{
                console.log("el tiempo ha expirado")
                clearInterval()
            }
        },2000)
    }
}

console.log(cuentaAtras(fecha1,60))

