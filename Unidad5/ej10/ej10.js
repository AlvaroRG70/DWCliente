window.addEventListener("load", inicializar)

function inicializar() {

    let formulario = document.getElementById('formulario');

    // Agregar evento de clic al botón de enviar
    



    let nombre = document.getElementById('nombre')
    let apellidos = document.getElementById('apellidos')
    let usuario = document.getElementById('usuario')
    let contrasena = document.getElementById('contrasena')
    let movil = document.getElementById('movil')
    let regexMov = /\d{9}/
    let email = document.getElementById('email')
    let regexpEm = /\w+\@gmail\.com$/


    function validarNombre(){
        if (nombre.value.length < 3){
            let p = document.createElement('p')
            p.innerHTML= 'Nombre deben tener al menos 3 caracteres.'
            nombre.parentNode.insertBefore(p, nombre.nextSibling)
        }
    }

    function validarApelli(){
        if (apellidos.value.length < 3){
            alert('apellidos deben tener al menos 3 caracteres.')
        }
    }

    function validarUsuario(){
        if (usuario.value.length < 3){
            alert('usuario deben tener al menos 3 caracteres.')
        }
    }

    function validarContra(){
        if (contrasena.value.length < 8){
            alert('contraseña debe tener al menos 8 caracteres.')
            return
        }
    }

    function validarMovil(){
        if (regexMov.test(movil.value)){
            alert('Numero debe tener 8 caracteres.')
            return
        }
    }

    function validarEmail(){
        if (regexpEm.test(email.value)){
            alert('Debe ser un email válido.')
            return
        }
    }

    nombre.addEventListener('blur', validarNombre)
    apellidos.addEventListener('input', validarApelli)
    usuario.addEventListener('input', validarUsuario)
    contrasena.addEventListener('input', validarContra)
    movil.addEventListener('input', validarMovil)
    email.addEventListener('input', validarEmail)

}
