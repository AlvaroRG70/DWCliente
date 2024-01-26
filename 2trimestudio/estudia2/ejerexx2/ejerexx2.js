window.addEventListener("load", inicializar)


function inicializar() {
    
    
    let form = document.getElementById('formulario')
    var codigo = document.getElementById('codigo')

    cargar()


    let er = /^[a-zA-Z]{3}\-\d{1,5}$/

    let p = document.createElement('p')


    function validarCodigo(){

        if (!er.test(codigo.value)){

            p.style.display = 'block'
            p.innerHTML = 'Campo no correcto'
            codigo.insertAdjacentElement('afterend', p)
            codigo.focus()
            return

        } else {

            p.style.display = 'none'
            p.innerHTML = ''

        }

    }

    codigo.addEventListener('blur', validarCodigo)

    function validarForm(){
        
        validarCodigo()

        if (p.style.display == 'block'){
            alert('No se puede enviar, hay errores')
        } else {

            localStorage.setItem("codigoLocal", codigo.value)

            alert(`se ha enviado el codifo ${codigo.value}`)

            form.submit()
        }

    }

    let boton = document.getElementById('boton')
    boton.addEventListener('click', validarForm)

    

    function cargar() {

        var codigoAlmacenado = localStorage.getItem("codigoLocal")
        console.log(codigoAlmacenado)

        if (codigoAlmacenado) {
            codigo.value = codigoAlmacenado
            alert(codigo.value)
        }
    }

    
    


}