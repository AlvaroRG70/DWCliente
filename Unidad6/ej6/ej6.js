window.addEventListener("load", inicializar)


function inicializar() {
    
    function crearLink1(){
        
        let div = document.getElementById('link')
        let link = document.createElement('a')
        let txt = document.createTextNode('Enlace a classroom')
        link.appendChild(txt)

        link.setAttribute('href','https://classroom.google.com/')
        div.appendChild(link)

    }
    function crearLink2(){

        let div = document.getElementById('link')
        let link = '<a href="https://www.youtube.com/">Enlace a yt</a>'
        div.innerHTML += '\n' + link

    }
    
    crearLink1()
    crearLink2()
}