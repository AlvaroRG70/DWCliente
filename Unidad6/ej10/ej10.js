window.addEventListener("load", inicializar)


function inicializar() {
    
    var div = document.getElementById('coord')
    div.addEventListener('mouseover', posicionPunt)
    
    function posicionPunt (e) {
        
        let x = e.clientX
        let y = e.clientY

        div.innerHTML = ''

        let coordenadas = document.createElement('p')
        let txt = document.createTextNode('Coordenadas: ' + x + ', ' + y)

        coordenadas.appendChild(txt)
        div.appendChild(coordenadas)
        
    }
}