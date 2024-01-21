window.addEventListener("load", inicializar)


function inicializar() {

    cuadrado()
    
    function cuadrado(){
        document.getElementsByTagName('ul')[0].setAttribute('type','square')
    }
    
    function insertarPrincipio(){

        let primero = document.getElementsByTagName('li')[0]
        let princ = document.createElement('li')
        let txt = document.createTextNode('esto va antes')
        princ.appendChild(txt)
        primero.insertAdjacentElement('beforebegin',princ)

    }
    insertarPrincipio()

    function insertarFinal(){

        let lista = document.getElementsByTagName('ul')[0]
        let elementofinal = document.getElementsByTagName('li')[-1]
        let final = document.createElement('li')
        let txt = document.createTextNode('Fiat Panda')
        final.appendChild(txt)
        lista.insertBefore(final, elementofinal)
    }
    insertarFinal()


}
