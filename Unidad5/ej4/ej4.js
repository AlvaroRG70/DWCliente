window.addEventListener("load", inicializar)

function inicializar() {

    function correcta1() {
        let correctaPreg = document.getElementById('correcto1').value;
        console.log(correctaPreg);
        let elementos = document.getElementsByName('p1');
        console.log(elementos[0].id);
      
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].value === correctaPreg) {
                let respuesta = document.createElement('p');
                let txt = document.createTextNode("La respuesta correcta es: " + elementos[i].value);
                respuesta.appendChild(txt);
                document.body.appendChild(respuesta); // Agrega el párrafo al cuerpo del documento o a otro elemento específico
            }
        }
    }

    function correcta2() {
        let correctaPreg = document.getElementById('correcto2').value;
        console.log(correctaPreg);
      
        let elementos = document.getElementsByName('p2');
        console.log(elementos[0].id);
      
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].value === correctaPreg) {
                let respuesta = document.createElement('p');
                let txt = document.createTextNode("La respuesta correcta es: " + elementos[i].value);
                respuesta.appendChild(txt);
                document.body.appendChild(respuesta); // Agrega el párrafo al cuerpo del documento o a otro elemento específico
            }
        }
      }
    
    boton1.addEventListener('click', correcta1)
    boton2.addEventListener('click', correcta2)
}