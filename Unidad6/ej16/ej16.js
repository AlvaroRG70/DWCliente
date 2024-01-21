// Datos de ejemplo en el array
var datosArray = ["Manzana", "Banana", "Cereza", "Dátil", "Uva", "Kiwi", "Mango", "Naranja", "Pera"];

// Función para filtrar y mostrar los datos del array
function filtrarArray(filtro) {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";  // Limpiar la lista antes de volver a mostrar

    // Filtrar los datos del array según el texto ingresado
    var datosFiltrados = datosArray.filter(function (elemento) {
        return elemento.toLowerCase().includes(filtro.toLowerCase());
    });

    // Mostrar los datos filtrados en la lista
    datosFiltrados.forEach(function (elemento) {
        var listItem = document.createElement("li");
        listItem.textContent = elemento;
        lista.appendChild(listItem);
    });
}
