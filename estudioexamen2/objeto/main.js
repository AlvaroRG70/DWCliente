let anyadirItegrantes = (dni, nombre, apellido, lista) => {
    let buscarDNI = lista.find((integrante)=>integrante.dni == dni)
    if (buscarDNI == undefined){
        let integrante = new Integrante(dni, nombre, apellido)
        lista.push(integrante)
    }
}

let lista1 = []
let lista2 = []
let lista3 = []

anyadirItegrantes("49166317E","Alvaro","Rodriguez",lista1)
anyadirItegrantes("49163417E","Albaerto","Caro",lista1)
anyadirItegrantes("49163517E","Irene","Sanchez", lista1)

anyadirItegrantes("49166317E","Luis","Rodriguez", lista2)
anyadirItegrantes("49163417E","Ivan","Caro", lista2)
anyadirItegrantes("49163517E","Elvis","Sanchez", lista2)

anyadirItegrantes("49166317E","Mercedes","Rodriguez",lista3)
anyadirItegrantes("49163417E","Joakinma","Caro",lista3)
anyadirItegrantes("49163517E","Jorge","Sanchez",lista3)




let banda1 = new Banda("DAW", 2020,lista1, 622327724, "Rock", )
let banda2 = new Banda("ASIR", 2022,lista2, 623443534, "Metal", )
let banda3 = new Banda("ASMR", 2023,lista3, 62233432434, "Rap", )

let listabandas = [banda1, banda2, banda3]

banda1.mostrarIntegrantes()

let buscarBandaNombre = (listab, nombre) => {
    let busqueda = listab.find((banda) => banda.nombre == nombre)
    return busqueda
}

console.log(buscarBandaNombre(listabandas, "DAW"))

let buscarBandaEstilo = (listab, estilo) => {
    let busqueda = listab.find((banda) => banda.estilo == estilo)
    return busqueda
}
console.log(buscarBandaEstilo(listabandas, "Rap"))

let ordenarBandasAnyo = (listab) => {
    let ordenado = listab.sort((a, b) => {return a.anyo - b.anyo})
    return ordenado
}

console.log(ordenarBandasAnyo(listabandas))

let eliminarBanda = (listab, nombre) => {
    let listasin = listab.filter((banda) => banda.nombre != nombre)
    return listasin
}

console.log(eliminarBanda(listabandas, "DAW"))