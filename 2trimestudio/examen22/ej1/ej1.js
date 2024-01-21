window.addEventListener("load", inicializar)


function inicializar() {
    
    function Crear(){
        let json =  [
            {titular: "Noticia 1",resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},
            {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion: "Esta es la noticia 2"},
            {titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"}]

        let div = document.getElementById('noticias')
        let cont = 1
        for (let j of json){
            console.log(j.titular)

            //fuera del div
            let div2 = document.createElement('div')
            div2.setAttribute('id', j.titular)
            div.appendChild(div2)

            //Dentro del div

            let h1 = document.createElement('h1')
            let txt1 = document.createTextNode(j.titular)
            h1.appendChild(txt1)

            div2.appendChild(h1)

            let p = document.createElement('p')
            p.setAttribute('id', 'resumen ' + cont)
            let txt2 = document.createTextNode(j.resumen)
            p.appendChild(txt2)
            cont +=1

            div2.appendChild(p)

            let img = document.createElement('img')
            img.setAttribute('src','imgs/v.png')
            img.setAttribute('name','mostrar')
            img.setAttribute('width','30')

            div2.appendChild(img)

            let h4 = document.createElement('h4')
            h4.style.display = 'none'
            txt3 = document.createTextNode(j.descripcion)
            h4.appendChild(txt3)

            div2.appendChild(h4)

        }

    }
    Crear()

    let img = document.getElementsByName('mostrar')
    
    for (let i of img){
        console.log(i.nextElementSibling.getAttribute('style'))
        i.addEventListener('click', Mostrar)
    }


    function Mostrar(e){
        
        let imgPuls = e.currentTarget
        let h4 = imgPuls.nextElementSibling
        console.log(h4)

        if (imgPuls.getAttribute('src') == 'imgs/v.png'){

            imgPuls.setAttribute('src', 'imgs/x.png')
            h4.style.display = 'block'
        } else {
            imgPuls.setAttribute('src', 'imgs/v.png')
            h4.style.display = 'none'
        }
    }
}