window.addEventListener("load", inicializar)

function inicializar() {
    
    let texto = document.getElementById('textoid')
    let form = document.getElementById('formulario')
    form.addEventListener('input', minusculas)

    function minusculas(){
        texto.value = texto.value.toLowerCase()
    }

}
