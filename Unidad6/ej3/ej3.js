window.addEventListener("load", inicializar)


function inicializar() {
    
    function cuadradillo() {
        document.getElementsByTagName('ul')[0].setAttribute('type','square');
    }
    cuadradillo()

    function anyadirPrincipio() {
        let lista = document.getElementsByTagName('ul')[0]
        let elemento1 = document.getElementsByTagName('li')[0]
        let principio = document.createElement('li')
        let txt = document.createTextNode('Ford mustang')
        principio.appendChild(txt)
        lista.insertBefore(principio, elemento1)
    }
    anyadirPrincipio()

    function anyadirFinal() {
        let lista = document.getElementsByTagName('ul')[0]
        let elementofinal = document.getElementsByTagName('li')[-1]
        let final = document.createElement('li')
        let txt = document.createTextNode('Fiat Panda')
        final.appendChild(txt)
        lista.insertBefore(final, elementofinal)
    }
    anyadirFinal()

    function anyadirMedio() {
        let longitud = document.getElementsByTagName('li').length
        let posicion = Math.round(longitud/2)
        let lista = document.getElementsByTagName('li')[posicion]
        let medio = document.createElement('li')
        let txt = document.createTextNode('Ducati Monster')
        medio.appendChild(txt)
        lista.insertAdjacentElement('afterend',medio)


    }
    anyadirMedio()

    function antesdespues() {
        let lista = document.getElementsByTagName('li')
        let anyadirAntes = document.createElement('li')
        let txtAntes = document.createTextNode('contengo los modelos con la palabra')
        anyadirAntes.appendChild(txtAntes)

        let anyadirDsp = document.createElement('li')
        let txtDsp = document.createTextNode('contengo los modelos con la palabra')
        anyadirDsp.appendChild(txtDsp)
        for (let i in lista){
            console.log(lista[i].textContent)
            if (lista[i].textContent.includes('BMW')){
                lista[i].insertAdjacentElement('beforebegin',anyadirAntes)
                lista[i].insertAdjacentElement('afterend',anyadirDsp)
            }
        }
    }
    
    antesdespues()
}
