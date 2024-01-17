window.addEventListener("load", inicializar)


function inicializar() {
    
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

    function validarForm() {
        validarTxt()
        if (p.style.display == 'block'){
            alert('Hay errores, no podemos enviar el formulario')
            formulario.reset()
        } else {
            alert('Formulario enviado correctamente')
            formulario.submit()
        }
    }

    texto.addEventListener('blur',validarTxt)
    let boton = document.getElementById('boton')
    boton.addEventListener('click',validarForm)
}