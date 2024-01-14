window.addEventListener("load", inicializar)


function inicializar() {
    
    var a = document.getElementById('enlace')
    var div = document.getElementById('contenedor')
    a.addEventListener('click', posicionPunt2)
    
    function posicionPunt2 (e) {
        
        let x = e.clientX
        let y = e.clientY

        let coordenadas = document.createElement('p')
        let txt = document.createTextNode('Coordenadas: ' + x + ', ' + y)

        coordenadas.appendChild(txt)
        div.appendChild(coordenadas)
        
        
    }
}