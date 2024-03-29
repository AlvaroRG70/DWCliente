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
    
        // Convertir el objeto a JSON y guardarlo en localStorage
        localStorage.setItem("preferenciasUsuario", JSON.stringify(preferenciasUsuario));
    }

    function cargarPreferencias() {
        // Obtener preferencias del usuario desde localStorage
        const preferenciasUsuario = localStorage.getItem("preferenciasUsuario");
    
        if (preferenciasUsuario) {
            // Convertir la cadena JSON de nuevo a un objeto
            const preferenciasObjeto = JSON.parse(preferenciasUsuario);
    
            // Mostrar un mensaje con las preferencias almacenadas
            alert(`Hola ${preferenciasObjeto.texto}!`);
        }
    }





}