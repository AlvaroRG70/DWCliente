window.addEventListener("load", inicializar)


function inicializar() {
    let para = document.createElement('p')
    let txt1 = document.createTextNode('Este es el')
    para.appendChild(txt1)
    console.log(para)

    let enfasis = document.createElement('em')
    let txt2 = document.createTextNode(' contenido ')
    enfasis.appendChild(txt2)
    para.appendChild(enfasis)

    let txt3 = document.createTextNode('de mi párrafo')
    para.appendChild(txt3)

    document.getElementById('testdiv').appendChild(para)
}

