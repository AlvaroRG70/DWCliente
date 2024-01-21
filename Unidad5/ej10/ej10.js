window.addEventListener("load", inicializar)

function inicializar() {

    let formulario = document.getElementById('formulario')

    let nombre = document.getElementById('nombre')
    let apellidos = document.getElementById('apellidos')
    let usuario = document.getElementById('usuario')
    let contrasena = document.getElementById('contrasena')
    let movil = document.getElementById('movil')
    let regexMov = /^\d{9}$/
    let email = document.getElementById('email')
    let regexpEm = /\w+\@gmail\.com$/
    let p = document.createElement('p')

    function validarNombre(){
        if (nombre.value.length < 3){
            
            p.style.display = 'block'
            p.innerHTML= 'Nombre deben tener al menos 3 caracteres.'
            nombre.insertAdjacentElement('afterend', p)
            return

        } else {
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    function validarApelli(){
        if (apellidos.value.length < 3){
            
            p.style.display = 'block'
            p.innerHTML= 'apellidos deben tener al menos 3 caracteres.'
            apellidos.insertAdjacentElement('afterend', p)
            return

        } else {
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    function validarUsuario(){
        if (usuario.value.length < 3){
            
            p.style.display = 'block'
            p.innerHTML= 'usuario deben tener al menos 3 caracteres.'
            usuario.insertAdjacentElement('afterend', p)
            return

        } else {

            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    function validarContra(){
        if (contrasena.value.length < 8){
        
            p.style.display = 'block'
            p.innerHTML= 'contraseña debe tener al menos 8 caracteres.'
            contrasena.insertAdjacentElement('afterend', p)
            return

        } else {
            
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    function validarMovil(){
        if (!regexMov.test(movil.value)){

            p.style.display = 'block'
            p.innerHTML= 'Numero debe tener 9 caracteres.'
            movil.insertAdjacentElement('afterend', p)
            return

        } else {
            
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }

    function validarEmail(){
        if (!regexpEm.test(email.value)){

            p.style.display = 'block'
            p.innerHTML= 'debe contener --@gmail.com'
            email.insertAdjacentElement('afterend', p)
            return

        } else {
            
            p.style.display = 'none'
            p.innerHTML = ''
        }
    }


    function resetear(){
        if (confirm('Desea resetear el formulario?')){
            formulario.reset()
        }
    }

    function validarFormulario(){
        validarNombre()
        validarApelli()
        validarUsuario()
        validarContra()
        validarMovil()
        validarEmail()

        if (p.style.display == 'block' || document.getElementsByTagName('input').value == ''){
            alert('Hay errores, no podemos enviar el formulario')
        } else {
            formulario.submit()
        }
    }

    nombre.addEventListener('blur', validarNombre)
    apellidos.addEventListener('blur', validarApelli)
    usuario.addEventListener('blur', validarUsuario)
    contrasena.addEventListener('blur', validarContra)
    movil.addEventListener('blur', validarMovil)
    email.addEventListener('blur', validarEmail)
    document.getElementById('reseteo').addEventListener('click',resetear)
    document.getElementById('boton').addEventListener('click', validarFormulario)


}
