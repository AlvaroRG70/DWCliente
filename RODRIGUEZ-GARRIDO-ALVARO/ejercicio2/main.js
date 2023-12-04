
let anyadirItegrantes = (dni, nombre, apellido, lista) => {
    let buscarDNI = lista.find((integrante)=>integrante.dni == dni)
    if (buscarDNI == undefined){
        let integrante = new Integrante(dni, nombre, apellido)
        lista.push(integrante)
    }
}

let listaintegrantes1 = []

anyadirItegrantes("423456754F", "Alvaro", "Rodriguez", listaintegrantes1)
anyadirItegrantes("422345754F", "Alberto", "Caro", listaintegrantes1)
anyadirItegrantes("423456754F", "Ivan", "Guerra", listaintegrantes1)
anyadirItegrantes("423656754F", "Irene", "Sanchez", listaintegrantes1)

console.log(listaintegrantes1)

let banda1 = new Banda("DAW", 2020, listaintegrantes1, 623748374, 'Rock')
let banda2 = new Banda("INTERFAZ", 2019, listaintegrantes1, 676748375, "Pop")
let banda3 = new Banda("CLIENTE", 2000, listaintegrantes1, 623776379, "Rap")
/*
banda1.mostrarBanda()

banda1.mostrarIntegrantes()
*/
let listadobandas = [banda1, banda2, banda3]



let imprimirListadoBandas = (listabandas) => {
    for (let banda of listabandas){
        document.write(banda.mostrarBanda() )
        
    }
}

imprimirListadoBandas(listadobandas)


let buscarBandaNombre = (listab, nombre) => {
    let busqueda = listab.find((banda) => banda.nombre == nombre)
    return busqueda
}

console.log(buscarBandaNombre(listadobandas, "CLIENTE"))

let ordenarBandasAnyo = (listab) => {
    let ordenado = listab.sort((a, b) => {return a.anyo - b.anyo})
    return ordenado
}

console.log(ordenarBandasAnyo(listadobandas))