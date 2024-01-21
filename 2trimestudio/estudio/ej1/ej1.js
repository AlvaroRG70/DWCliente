window.addEventListener("load", inicializar)

function inicializar() {
    // Obtener el formulario

    var input = document.getElementsByTagName('input')

    let p = document.createElement('p')

    for (let opcion of input){
        opcion.addEventListener('click', correcta)
    }


    function correcta(e) {
        let opcion = e.currentTarget
        console.log(opcion.value)
        if (opcion.value == 'bien'){
            p.innerHTML = 'VAMOSSSS!!'
            let txt = opcion.nextElementSibling
            txt.insertAdjacentElement('afterend', p)
        } else {
            p.innerHTML = 'MAL!!'
            let txt = opcion.nextElementSibling
            txt.insertAdjacentElement('afterend', p)
        }
    }

}
