var regexFecha = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
var fechaActual = new Date()


var cuentaAtras = (fecha,segundos) => {

    fec = new Date(fecha)
    if (regexFecha.test(fecha)) {
        var seg = (fechaActual - fec)  / 1000
    }
    
    var id = setInterval(() => {
    console.log(seg);
    seg -= 2
    segundos -= 2;
    if (segundos <= 0) {
        console.log('El tiempo ha expirado.');
        clearInterval(id);
    }

    }, 2000);


}

cuentaAtras("01/02/2023",10)

