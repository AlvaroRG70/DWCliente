window.addEventListener("load", inicializar)


function inicializar() {
    
    function crearTabla(){
        let tabla = document.getElementById('tablita')
        for (var i = 1; i <= 20; i++) {
            
            var fila = document.createElement('tr')
            for (var a = 1; a <= 20; a++) {

                let columna = document.createElement('td')
                let txt = document.createTextNode('columna' + a)
                columna.appendChild(txt)
                fila.appendChild(columna)   
            }
            tabla.appendChild(fila)
        }
        
        
    }
    
    crearTabla()
}