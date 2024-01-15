window.addEventListener("load", inicializar)


function inicializar() {
    
    function crearHTML () {
        var json =  [
            {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
            {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
            {src:"/img/img3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]}
        ]
    
        let div = document.getElementById('todos-los-viajes')
        let h1 = document.createElement('h1')
        let txt1 = document.createTextNode('Subtitulo')
        h1.appendChild(txt1)
        div.appendChild(h1)
        let ul = document.createElement('ul')
        div.appendChild(ul)
    
        for (let a of json){
            
            console.log(a.src)
            
            let li = document.createElement('li')
            
            let img = document.createElement('img')
            img.setAttribute('src', a.src)
            li.appendChild(img)
    
            let p = document.createElement('p')
            let txtdesc = document.createTextNode(a.desc)
            p.appendChild(txtdesc)
            li.appendChild(p)
    
            let ul2 = document.createElement('ul')
            ul2.setAttribute('class','specs')
    
            for (let i of a.specs){
    
                console.log(i)
                let li2 = document.createElement('li')
                let txt3 = document.createTextNode(i)
                li2.appendChild(txt3)
                console.log(li2)
    
                ul2.appendChild(li2)
            }
    
            li.appendChild(ul2)
    
            ul.appendChild(li)
    
    
    
        }
    }
    crearHTML()



    let imagenes = document.getElementsByTagName('img')
    for (let img of imagenes){
        img.addEventListener('click',ocultar)
    }
    
    function ocultar(e){
        let imagenPulsada = e.currentTarget
        
        let hermana1 = imagenPulsada.nextElementSibling
        let hermana2 = hermana1.nextElementSibling

        if (hermana1.getAttribute('hidden') && hermana2.getAttribute('hidden')){
            hermana1.removeAttribute('hidden')
            hermana2.removeAttribute('hidden')
        } else {
            hermana1.setAttribute('hidden',true)
            hermana2.setAttribute('hidden',true) 
        }

        
    }
        
}
    