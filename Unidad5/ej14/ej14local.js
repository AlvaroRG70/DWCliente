document.addEventListener("DOMContentLoaded", function() {
    // Cargar preferencias almacenadas en localStorage si existen
    cargarPreferencias();
});

function enviarPedido() {
    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const habitacion = document.getElementById("habitacion").value;

    // Obtener tipos de café seleccionados
    const cafesSeleccionados = obtenerCafesSeleccionados();

    // Guardar preferencias en localStorage
    guardarPreferencias(nombre, cafesSeleccionados);

    // Mostrar mensaje al usuario
    alert(`Hemos recibido tu pedido. Enviaremos ${cafesSeleccionados.join(", ")} a la habitación ${habitacion}.`);

    // Puedes enviar los datos del pedido a tu servidor aquí si es necesario
}

function obtenerCafesSeleccionados() {
    const cafes = document.getElementsByName("cafe");
    const cafesSeleccionados = [];

    for (const cafe of cafes) {
        if (cafe.checked) {
            cafesSeleccionados.push(cafe.value);
        }
    }

    return cafesSeleccionados;
}

function guardarPreferencias(nombre, cafesSeleccionados) {
    // Crear un objeto con las preferencias del usuario
    const preferenciasUsuario = {
        nombre: nombre,
        cafes: cafesSeleccionados
    };

    // Convertir el objeto a JSON y guardarlo en localStorage
    localStorage.setItem("preferenciasUsuario", JSON.stringify(preferenciasUsuario));
}

function cargarPreferencias() {
    // Obtener preferencias del usuario desde localStorage
    const preferenciasUsuario = localStorage.getItem("preferenciasUsuario");

    if (preferenciasUsuario) {
        // Convertir la cadena JSON de nuevo a un objeto
        const preferenciasObjeto = JSON.parse(preferenciasUsuario);

        // Mostrar un mensaje con las preferencias almacenadas
        alert(`Hola ${preferenciasObjeto.nombre}! Tenemos una oferta especial para tu café favorito: ${preferenciasObjeto.cafes.join(", ")}.`);
    }
}
