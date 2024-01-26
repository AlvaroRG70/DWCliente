//valida un formulario de un campo onthefly y al enviar en el boton de formulario, que tambien tenga un boton de reseteo(con confirmacion) y cuyo campo tiene q comprender 3 numeros y de 2 a 5 letras, los numeros y las letras tiene que estar separadas por un guión. HAzlo 2 veces, una que se almacene en el servidor y otra qye no

window.addEventListener("load", inicializar)


function inicializar() {

    cargarPreferencias()


    let formulario = document.getElementById('formulario')
    let code = document.getElementById('codigo')
    let er = /^\d{3}\-[A-Z]{2,5}$/
    let boton = document.getElementById('boton')
    let boton2 = document.getElementById('boton2')

    let p = document.createElement('p')
    

    function validarCodigo(){

        if (!er.test(code.value)){ 

            p.style.display = 'block'
            p.innerHTML = 'Código no cumple las condiciones'
            code.insertAdjacentElement('afterend', p)
            //boton.setAttribute('disabled', 'true')
            return

        } else {
            p.style.display = 'none'
            p.innerHTML = ''
            //boton.removeAttribute('disabled')
        }

    }
    
    code.addEventListener('blur', validarCodigo)
    
    function validarForm(){

        validarCodigo()

        if (p.style.display == 'block'){
            alert('No podemos enviar el formulario')

        } else {

            guardarPreferencias(code)
            formulario.submit()
            alert('datos enviados y almacenados')


        }
    }

    function resetForm(){

        if (confirm('quieres resetear')){
            formulario.reset()

        }
    }

    boton.addEventListener('click', validarForm)
    boton2.addEventListener('click', resetForm)


    function guardarPreferencias(codigo) {
        // Crear un objeto con las preferencias del usuario
        const preferenciasUsuario = {
            texto: codigo.value
        };

        // Convertir el objeto a JSON y guardar como cookie
        document.cookie = "codigo=" + JSON.stringify(preferenciasUsuario) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
        
    }

    function cargarPreferencias() {
        // Obtener preferencias del usuario desde las cookies
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("codigo=")) {
                // Obtener el valor de la cookie y convertirlo a un objeto
                const preferenciasObjeto = JSON.parse(cookie.substring("codigo=".length, cookie.length));
                console.log(preferenciasObjeto);

                // Mostrar un mensaje con las preferencias almacenadas
                alert(`Hola ${preferenciasObjeto.texto}!`);
                break; // Solo se necesita la primera cookie que cumple con la condición
            }
        }
    }

 

}
    