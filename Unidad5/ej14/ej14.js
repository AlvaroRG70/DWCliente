document.addEventListener("DOMContentLoaded", function() {
    // Cargar preferencias almacenadas en cookies si existen
    cargarPreferencias();
});

function enviarPedido() {
    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const habitacion = document.getElementById("habitacion").value;

    // Obtener tipos de café seleccionados
    const cafesSeleccionados = obtenerCafesSeleccionados();

    // Guardar preferencias en cookies
    guardarPreferencias(nombre, cafesSeleccionados);

    // Mostrar mensaje al usuario
    alert(`Hemos recibido tu pedido. Enviaremos ${cafesSeleccionados.join(", ")} a la habitación ${habitacion}.`);

    // Puedes enviar los datos del pedido a tu servidor aquí si es necesario
}

function obtenerCafesSeleccionados() {
    const cafes = document.getElementsByName("cafe");
    const cafesSeleccionados = [];

    for (cafe of cafes){
        if (cafe.checked) {
            cafesSeleccionados.push(cafe.value);
        } 
    }


    return cafesSeleccionados;
}

function guardarPreferencias(nombre, cafesSeleccionados) {
    // Crear una cookie con las preferencias del usuario
    document.cookie = `nombre=${nombre}; cafes=${JSON.stringify(cafesSeleccionados)}; expires=${obtenerFechaExpiracion()}; path=/`;
}

function cargarPreferencias() {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const [nombre, valor] = cookie.trim().split("=");

        if (nombre === "nombre") {
            alert(`Hola ${valor}! Tenemos una oferta especial para tu café favorito.`);
        }
    }
}

function obtenerFechaExpiracion() {
    const expiracion = new Date();
    expiracion.setFullYear(expiracion.getFullYear() + 1); // Caduca en 1 año

    return expiracion.toUTCString();
}







