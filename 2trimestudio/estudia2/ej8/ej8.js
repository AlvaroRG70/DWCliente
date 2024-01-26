window.addEventListener("load", inicializar)


function inicializar() {

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

    function crear(){
        
        for (let lista of json){

            let li = document.createElement('li')

            let img = document.createElement('img')
            img.setAttribute('src', lista.src)
            li.appendChild(img)

            let p = document.createElement('p')
            let txt2 = document.createTextNode(lista.desc)
            p.appendChild(txt2)
            li.appendChild(p)

            let ul2 = document.createElement('ul')
            ul2.setAttribute('class', 'specs')
            li.appendChild(ul2)
            
            for (let a of lista.specs){
                
                let li2 = document.createElement('li')
                let txt3 = document.createTextNode(a)
                li2.appendChild(txt3)

                ul2.appendChild(li2)


            }
            console.log(li)
            
            ul.appendChild(li)

        }

    }
    crear()

    let imagenes = document.getElementsByTagName('img')

    for (let img of imagenes){
        img.addEventListener('click', mostrar)
    }

    function mostrar(e){
        let imagen = e.currentTarget

        let padre = imagen.parentNode
        console.log(padre)

        let hijas = padre.childNodes
        console.log(hijas)

        let hermanas = [...hijas].filter((a)=> a != imagen)
        console.log(hermanas)
        for (let hermana of hermanas){
            if (hermana.style.display == 'none'){
                hermana.style.display = 'block'
            } else {
                hermana.style.display = 'none'
            }
        }
        
    }

}