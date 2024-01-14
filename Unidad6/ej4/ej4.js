window.addEventListener("load", inicializar)


function inicializar() {
    
    

    function get_fortune() {
        var hoy = new Date(); 
        dichos= new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
        );
        var n=dichos.length;
        numero = Math.floor(Math.random()*n);
        
        let p = document.createElement('p')
        dicho = document.createTextNode("Hoy es: " + hoy)
        p.appendChild(dicho)

        let br1 = document.createElement('br')
        let br2 = document.createElement('br')
        let br3 = document.createElement('br')
        let br4 = document.createElement('br')

        p.appendChild(br1)
        p.appendChild(br2)

        let txt1 = document.createTextNode("Hoy la suerte te dice")

        p.appendChild(txt1)
        p.appendChild(br3)
        p.appendChild(br4)
        
        let em = document.createElement('em')
        let txt2 = document.createTextNode(dichos[numero])
        em.appendChild(txt2)

        p.appendChild(em)

        document.getElementById('divdicho').appendChild(p)
    }

    get_fortune()
            
}