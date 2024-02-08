window.addEventListener("load", inicializar)


function inicializar() {
    
    let json = [
        {clase_pais:"usa", ciudad_h2:"New York,NY",detalle_precio_total:"1,899",detalle_num_noches:7,precio_noche:275,ruta_imagen:"./photos/newyork.jpg",pie_imagen:"Puente Brooklyn"},
        {clase_pais:"paris",ciudad_h2:"Paris,Francia",detalle_precio_total:"1,499",detalle_num_noches:5,precio_noche:300,ruta_imagen:"./photos/paris.jpg",pie_imagen:"Notre Dame de Paris"},
        {clase_pais:"uk",ciudad_h2:"Londres,UK",detalle_precio_total:"2,199",detalle_num_noches:5,precio_noche:440,ruta_imagen:"./photos/london.jpg",pie_imagen:"Torre de Londres"}]

    let h1 = document.getElementById('mostrar')
    let txth1 = document.createTextNode('MOSTRAR VIAJES')
    h1.appendChild(txth1)

    let crear_ul = document.createElement('ul')
    h1.insertAdjacentElement('afterend',crear_ul)

    let ul = h1.nextElementSibling
    ul.style.display = 'none'




    function crear(){
        for (let a of json){

            let li = document.createElement('li')
            li.setAttribute('class', 'viaje '+a.clase_pais)
            ul.appendChild(li)

            let h2 = document.createElement('h2')
            let txt_h2 = document.createTextNode(a.ciudad_h2)
            h2.appendChild(txt_h2)
            li.appendChild(h2)

            let span = document.createElement('span')
            span.setAttribute('class','detalle')
            let txt_span = document.createTextNode(a.detalle_precio_total +' por '+a.detalle_num_noches +' noches')
            span.appendChild(txt_span)
            li.appendChild(span)

            let button = document.createElement('button')
            button.setAttribute('class','reserva')
            let txt_button = document.createTextNode('Resérvalo ya!')
            button.appendChild(txt_button)
            li.appendChild(button)

            let ul2 = document.createElement('ul')
            ul2.setAttribute('class','fotos')
            li.appendChild(ul2)

            let li2 = document.createElement('li')
            ul2.appendChild(li2)

            let img = document.createElement('img')
            img.setAttribute('src',a.ruta_imagen)
            li2.appendChild(img)

            let span2 = document.createElement('span')
            let txt_span2 = document.createTextNode(a.pie_imagen)
            span2.appendChild(txt_span2)
            li2.appendChild(span2)

        }
    }

    crear()

    h1.addEventListener('click', ocultar)



    function ocultar(){
        
        if (ul.style.display == 'none' ){
            h1.innerHTML = 'OCULTAR VIAJES'
            ul.style.display = 'block'

        } else {
            h1.innerHTML = 'MOSTRAR VIAJES'
            ul.style.display = 'none'
        }

    }

    let lista_ul = document.getElementsByClassName('fotos')
    console.log(lista_ul)

    for (let ul of lista_ul){
        ul.addEventListener('mouseover', marcar)
        ul.addEventListener('mouseout', eliminar)
    }

    function marcar(e){

        let elemento = e.currentTarget
        
        let padre = elemento.parentNode

        let hijas = padre.childNodes

        let span_hijo = [...hijas].filter((a)=> a.getAttribute('class') == 'detalle')

        span_hijo[0].classList.add("detalle2")  
    }

    function eliminar(e){

        let elemento = e.currentTarget
        
        let padre = elemento.parentNode

        let hijas = padre.childNodes

        let span_hijo = [...hijas].filter((a)=> a.getAttribute('class') == 'detalle detalle2')

        span_hijo[0].classList.remove("detalle2")  
    }


    //creamos el input

    let boton = document.getElementsByClassName('reserva')
    console.log(boton)
    for (let bot of boton){
        bot.addEventListener('click', mostrarForm)
    }

    let input = document.createElement('input')
    input.setAttribute('id', 'intro')
    input.style.display = 'none'

    let botonEnv = document.createElement('button')
    botonEnv.setAttribute('id', 'boton')
    let txt_boton = document.createTextNode('Guardar Contenido')
    botonEnv.appendChild(txt_boton)
    botonEnv.style.display = 'none'

    function mostrarForm(e){

        var botonPuls = e.currentTarget

        botonPuls.insertAdjacentElement('afterend',input)
        input.insertAdjacentElement('afterend',botonEnv)

        var coger_input = document.getElementById('intro')
        var coger_boton = document.getElementById('boton')

        if (coger_input.style.display == 'none' ){

            coger_input.style.display = 'block'
            coger_boton.style.display = 'block'

        } else {

            coger_input.style.display ='none'
            coger_boton.style.display = 'none'
        }


        let p = document.createElement('p')
        p.style.display = 'none'

        function validarIntro(){

            if (coger_input.value == ''){


                
                p.style.display = 'block'
                p.innerHTML = 'Campo vacio'
                coger_input.insertAdjacentElement('afterend', p)
                return

            } else {

                p.style.display = 'none'
                p.innerHTML = ''
                localStorage.setItem("codigoLocal", coger_input.value)


            }

        }

        coger_boton.addEventListener('click',validarIntro)



    }




    






  

}
