window.addEventListener("load", inicializar)

function inicializar() {

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let usuario = document.getElementById('usuario');
    let contrasena = document.getElementById('contrasena');
    let movil = document.getElementById('movil');
    let email = document.getElementById('email')
    let formulario = document.getElementById('form')

    let p = document.createElement('p')

    let regexMov = /^\d{9}$/
    let regexpEm = /\w+\@gmail\.com/

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
    
    function validarMovil(){
        if (!regexMov.test(movil.value)){
            p.innerHTML = 'Numero tiene que tener 9 caracteres'
            movil.insertAdjacentElement('afterend', p)
            return 

        } else{
            p.innerHTML = ''
            p.style.display = 'none'
        }
    }

    function validarEmail(){
        if (!regexpEm.test(email.value)){

            p.innerHTML = 'Tiene que contener @gmail.com'
            email.insertAdjacentElement('afterend', p)
            return 

        } else{
            p.innerHTML = ''
            p.style.display = 'none'
        }
    }

    function validarFormulario(){
        validarNombre()
        validarMovil()
        validarMovil()

        if (p.style.display == 'block'){
            alert("Hay errores")
        } else {
            alert("enviado correctamente")
            formulario.submit()
        }
    }


    function resetear(){
        if (confirm('quieres resetear')){
            formulario.reset()
        }
    }

    let envio = document.getElementById('boton')
    let reset = document.getElementById('reseteo')

    nombre.addEventListener('blur', validarNombre)
    movil.addEventListener('blur', validarMovil)
    email.addEventListener('blur', validarEmail)

    envio.addEventListener('click', validarFormulario)
    reset.addEventListener('click', resetear)



    let txtarea = document.getElementById('area')
    let p2 = document.createElement('p')
    p2.innerHTML = 0 + '/145'
    txtarea.insertAdjacentElement('afterend', p2)
    
    function contarLetras() {
        p2.innerHTML = txtarea.value.length + '/145'
    }

    txtarea.addEventListener('input', contarLetras)


}
