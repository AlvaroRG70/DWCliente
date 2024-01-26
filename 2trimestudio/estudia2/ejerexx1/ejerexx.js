window.addEventListener("load", inicializar)


function inicializar() {
    
    let div = document.getElementById('noticias')
    console.log(div)
    
    let json =  [{titular: "Noticia 1",	resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},
                {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion: "Esta es la noticia 2"},
                {titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"}];	
                
    function crear() {
        let contador = 1
        for (let a of json){

            let div2 = document.createElement('div')
            div2.setAttribute('id', 'noticia'+contador)
            div.appendChild(div2)

            let h1 = document.createElement('h1')
            let txt = document.createTextNode(a.titular)
            h1.appendChild(txt)
            div2.appendChild(h1)

            let p = document.createElement('p')
            p.setAttribute('id', 'resumen'+contador)
            let txt2 = document.createTextNode(a.resumen)
            p.appendChild(txt2)
            div2.appendChild(p)

            let img = document.createElement('img')
            img.setAttribute('src', 'v.png')
            img.setAttribute('name', 'imagen')
            img.setAttribute('width', '30')
            div2.appendChild(img)

            let h4 = document.createElement('h4')
            let txt3 = document.createTextNode(a.descripcion)
            h4.appendChild(txt3)
            h4.style.display = 'none'
            div2.appendChild(h4)

            contador ++

        }

    }
    crear()

    let imagenes = document.getElementsByTagName('img')

    for (let img of imagenes){
        img.addEventListener('click', mostrar)
    }

    function mostrar(e){

        let imagenP = e.currentTarget
        let hermano = imagenP.nextElementSibling
        console.log(hermano)

        if (hermano.style.display == 'none'){

            hermano.style.display = 'block'
            imagenP.setAttribute('src', 'x.png')
            
        }else {

            hermano.style.display = 'none'
            imagenP.setAttribute('src', 'v.png')
        }

    }


}