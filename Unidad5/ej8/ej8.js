window.addEventListener("load", inicializar)

function inicializar() {

    let formulario = document.getElementById('formulario');

    // Agregar evento de clic al botón de enviar
    

    function validar() {

        let nombre = document.getElementById('nombre1');
        
        let apellidos = document.getElementById('apellidos').value;
        let usuario = document.getElementById('usuario').value;
        let contrasena = document.getElementById('contrasena').value;
        let movil = document.getElementById('movil').value;
        let regexMov = /\d{9}/
        let email = document.getElementById('email').value;
        let regexpEm = /\w+\@gmail\.com$/
        
        

       
        
       

        if (contrasena.length < 8){
            alert('contraseña debe tener al menos 8 caracteres.')
            return
        }

        if (!regexMov.test(movil)){
            alert('Numero debe tener 9 caracteres.')
            return
        }

        if (!regexpEm.test(email)){
            alert('Debe ser un email válido.')
            return
        }

        
        formulario.submit()
    }
    
    document.getElementById('boton').addEventListener('click',validar)

    function resetear(){
        if (confirm('Desea resetear el formulario?')){
            formulario.reset()
        }
    }
    
    let p = document.createElement('p')
    var nombre = document.getElementById('nombre1');
    
    function validarNombre() {
        

        if (nombre.value.length < 3){
            p.style.display = 'block'
            p.innerHTML = 'Nombre y apellidos deben tener al menos 3 caracteres.'
            nombre.insertAdjacentElement('afterend', p)
    
            return

        } else {
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    nombre.addEventListener('blur', validarNombre)
    document.getElementById('reseteo').addEventListener('click',resetear)



}
