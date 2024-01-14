window.addEventListener("load", inicializar)


function inicializar() {

    var img = document.getElementById('imagen')
    document.addEventListener('mousemove', seguir)

    function seguir(e) {
        let x = e.clientX
        let y = e.clientY

        img.setAttribute('hspace',x)
        img.setAttribute('vspace', y)
    }

}