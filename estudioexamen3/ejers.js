/*
Trabajas para una agencia de publicidad y te han pedido el siguiente desarrollo:
Al cargar la página se solicita un nombre de usuario, este debe contener
exactamente 7 dígitos o caracteres, ni más, ni menos, en caso contrario debe volver
a solicitar el nombre de usuario.
Una vez introducido el nombre de usuario, el programa averiguará el número de
dígitos que contiene el mismo y mostrará un pop-up en la esquina inferior derecha
cada 5 segundos tantas veces como dígitos tenga el nombre de usuario. El pop-up
mostrará el siguiente mensaje:
"Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!
*/


/*

var nombvre_us = prompt("escribe el nombre de usuario");
while (nombvre_us.length != 7) {
    var nombvre_us = prompt("escribe el nombre de usuario de 7 digitos");
}

let digitos = nombvre_us.length;
let contador = 0;

let ventanas = setInterval(() => {
    if (contador < digitos) {
        let mensaje = `Hola ${nombvre_us}. Aquí tienes el producto del año. Atrévete a probarlo!!`;
        var ventana = window.open("", "", 'width=400,height=300,left=2000,top=1000');
        ventana.document.write(mensaje);
        contador++
    } else {
        clearInterval(ventanas);
    }
}, 5000);

*/


let mapp = new Map([[1,2],[4,6]])


let variab = [...mapp.values()]
for ([i,a] of mapp){
    console.log(i)
    console.log(a)
}
console.log(...variab)






