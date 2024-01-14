window.addEventListener("load", inicializar)

function inicializar() {

    let formulario = document.getElementById('formulario');

    // Agregar evento de clic al botón de enviar
    

    function validar() {

        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let usuario = document.getElementById('usuario').value;
        let contrasena = document.getElementById('contrasena').value;
        let movil = document.getElementById('movil').value;
        let regexMov = /\d{9}/
        let email = document.getElementById('email').value;
        let regexpEm = /\w+\@gmail.com$/

        if (nombre.length < 3 || apellidos.length < 3 || usuario.length < 3){
            alert('Nombre y apellidos deben tener al menos 3 caracteres.')
            return
        }

        if (contrasena.length < 8){
            alert('contraseña debe tener al menos 8 caracteres.')
            return
        }

        if (regexMov.test(movil)){
            alert('Numero debe tener 8 caracteres.')
            return
        }

        if (regexpEm.test(email)){
            alert('Debe ser un email válido.')
            return
        }

        alert('Formulario validado correctamente. Puedes enviarlo.')
        formulario.submit()
    }
    
    document.getElementById('boton').addEventListener('click',validar)

    function resetear(){
        if (confirm('Desea resetear el formulario?')){
            formulario.reset()
        }
    }
    
    document.getElementById('reseteo').addEventListener('click',resetear)



}
