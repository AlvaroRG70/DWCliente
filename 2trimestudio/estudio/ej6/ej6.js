window.addEventListener("load", inicializar)


function inicializar() {
    
    let div = document.getElementById('viajes')


    div.addEventListener('mouseover', coord)

    function coord(e){
        let x = e.clientX
        let y = e.clientY
        div.innerHTML = ''
        let p = document.createElement('p')
        let txt = document.createTextNode( x + ', ' +y)
        p.appendChild(txt)
        div.appendChild(p)

    }
}