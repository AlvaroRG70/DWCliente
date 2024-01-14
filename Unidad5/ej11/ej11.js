window.addEventListener("load", inicializar)

function inicializar() {

    let pss1 = document.getElementById('contrasena1')
    let pss2 = document.getElementById('contrasena2')

    pss1.addEventListener('blur', vacia)
    pss2.addEventListener('blur', vacia)


    function vacia(e){

        if (e.currentTarget.value == ''){

            alert('el campo no puede estar vacio')
            e.currentTarget.focus()     

        }
    }


}
