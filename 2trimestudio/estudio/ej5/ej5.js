window.addEventListener("load", inicializar)


function inicializar() {
    
    function crearHTML () {
        var json =  [
            {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
            {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
            {src:"/img/img3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]}
        ]

        let div = document.getElementById('viajes')
        let h1 = document.createElement('h1')
        let txt = document.createTextNode('Subtitulo')

        h1.appendChild(txt)
        div.appendChild(h1)

        let ul = document.createElement('ul')

        div.appendChild(ul)

        for (let element of json) {
            
            let li = document.createElement('li')

            let img = document.createElement('img')
            img.setAttribute('src', element.src)
            li.appendChild(img)

            let p = document.createElement('p')
            let txt2 = document.createTextNode(element.desc)
            p.appendChild(txt2)
            li.appendChild(p)

            let ul2 = document.createElement('ul')
            ul2.setAttribute('class', 'specs')

            for (let i of element.specs){
                
                let li2 = document.createElement('li')
                let txt3 = document.createTextNode(i)

                li2.appendChild(txt3)

                ul2.appendChild(li2)

            }

            li.appendChild(ul2)
            console.log(li)
            ul.appendChild(li)

        }
    
    }

    crearHTML()
    
    let imagenes = document.getElementsByTagName('img')

    for (let imagen of imagenes) {
        imagen.addEventListener('click', mostrar)
    } 


    function mostrar(e){
        let img = e.currentTarget
        console.log(img)
        let padres = img.parentNode
        
        let hermanos = [...padres.childNodes].filter((i)=>i != img)
        console.log(hermanos)
        for (let a of hermanos){
            
            if (a.style.display == 'block'){
                a.style.display = 'none'
            } else {
                a.style.display = 'block'
            }

        }
    }



}
    