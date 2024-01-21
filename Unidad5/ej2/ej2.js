window.addEventListener("load", inicializar)

function inicializar() {

    function mayusculas() {
        let elementosFormulario = document.getElementById("formulario").elements
        
        for (var i = 0; i < elementosFormulario.length; i++){

            var elemento = elementosFormulario[i]
            
            if (elemento.type == 'text' || elemento.type == 'email'){

                elemento.value = elemento.value.toUpperCase()
            }
        }
    }

    function mostrarDatos() {
        let elementosFormulario = document.getElementById("formulario").elements
        var mensaje = ''
        console.log(elementosFormulario)
        for (var i = 0; i < elementosFormulario.length; i++){
            var elemento = elementosFormulario[i]
            if (elemento.tagName == 'INPUT' && elemento.type != 'button'){
                mensaje += elemento.name + ': ' + elemento.value + '\n'
            } else if (elemento.tagName == "SELECT"){
                mensaje += elemento.name + ': ' + elemento.options[elemento.selectedIndex].text + '\n' 
            }            
        }

        var nuevaVentana = window.open('', '_blank')
        nuevaVentana.document.write('<pre>' + mensaje + '</pre>')
    }

    var boton = document.getElementById('boton');
    boton.addEventListener('click',mayusculas)
    boton.addEventListener('click', mostrarDatos);

    //ejercicio 3
    
    function calcularEdad() {

        let elementoFecha = document.getElementById("fechaNac")
        let fechaEdad = new Date(elementoFecha.value)
        let fechaHoy = new Date()
        let edadMseg = fechaHoy - fechaEdad
        let edad = Math.floor(edadMseg/(1000*60*60*24*365))

        document.getElementById("edad1").value = edad
    }

    var salidaAnho=document.getElementById('fechaNac');
    salidaAnho.addEventListener('blur',calcularEdad)

}

