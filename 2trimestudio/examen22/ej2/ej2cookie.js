window.addEventListener("load", inicializar)


function inicializar() {

    cargarPreferencias()
    
    let formulario = document.getElementById('formulario')

    let texto = document.getElementById('codigo')
    let er = /^[A-Z]{3}\-\d{1,5}$/

    let p = document.createElement('p')

    function validarTxt(){

        if (!er.test(texto.value)){
            
            p.style.display = 'block'
            p.innerHTML = 'texto no cumple las condiciones'
            texto.insertAdjacentElement('afterend', p)
            return

        } else {
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    

    texto.addEventListener('blur',validarTxt)
    let boton = document.getElementById('boton')
    boton.addEventListener('click',validarForm)


    

    function validarForm() {
        
        validarTxt()

        if (p.style.display == 'block'){

            alert('Hay errores, no podemos enviar el formulario')
            formulario.reset()
            
        } else {
            guardarPreferencias(texto)

            alert(`Su código almacenado es: ${texto.value}. Formulario enviado correctamente`);

            formulario.submit()
        }
    }


    function guardarPreferencias(texto) {
        // Crear un objeto con las preferencias del usuario
        const preferenciasUsuario = {
            texto: texto.value
        };

        // Convertir el objeto a JSON y guardar como cookie
        document.cookie = "preferenciasUsuario=" + JSON.stringify(preferenciasUsuario) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
        
    }

    function cargarPreferencias() {
        // Obtener preferencias del usuario desde las cookies
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("preferenciasUsuario=")) {
                // Obtener el valor de la cookie y convertirlo a un objeto
                const preferenciasObjeto = JSON.parse(cookie.substring("preferenciasUsuario=".length, cookie.length));
                console.log(preferenciasObjeto);

                // Mostrar un mensaje con las preferencias almacenadas
                alert(`Hola ${preferenciasObjeto.texto}!`);
                break; // Solo se necesita la primera cookie que cumple con la condición
            }
        }
    }





}



