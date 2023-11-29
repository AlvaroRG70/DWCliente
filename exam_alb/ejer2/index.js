
var expReg = /^[a-z0-9ñ]{7}/gi

var nombre = prompt("Introduce un nombre de usuario")
while (!expReg.test(nombre)){
    nombre = prompt("Introduce un nombre de usuario correcto")
}
var numero_digitos = (cadena) => {
    var lista = cadena.split("")
    var expReg2 = /\d/
    return lista.filter((valor)=>expReg2.test(valor)).length
}
var numeros = numero_digitos(nombre)

let id = setInterval(() => {
    let ventana = window.open('', '', 'width=50, height=50,top=' + (window.screen.availHeight - 50) + ',left=' + (window.screen.availWidth - 50));
    ventana.document.write(`"Hola ${nombre} <br> Aquí tienes el producto del año. <br> Atrévete a probarlo."`);
    numeros--;
    if (numeros <= 0) {
        clearInterval(id);
    }
}, 5000);
