window.addEventListener("load", inicializar)

function inicializar() {
    
    let contras = document.getElementsByTagName('input')
    
    for (let contra of contras){
        contra.addEventListener('blur', vacia)
    }

    let div = document.getElementsByTagName('div')[0]

    function vacia (e){
        let pss = e.currentTarget
        if (pss.value == ''){
            div.innerHTML = 'No puede estar vacía'

            pss.focus()
        } else {
            div.innerHTML = ''
        }

    }


}
