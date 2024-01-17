document.addEventListener("DOMContentLoaded", function() {
    // Cargar dirección de envío almacenada en cookies si existe
    cargarDireccion();
});

function guardarDireccion() {
    // Obtener dirección del formulario
    const direccion = document.getElementById("direccion").value;

    // Guardar dirección en cookies
    document.cookie = `direccion=${direccion}; expires=${obtenerFechaExpiracion()}; path=/`;

    // Mostrar mensaje al usuario
    alert("Dirección de envío guardada correctamente.");
}

function cargarDireccion() {
    // Obtener dirección de envío desde cookies
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const [nombre, valor] = cookie.trim().split("=");

        if (nombre === "direccion") {
            // Rellenar automáticamente el campo de dirección
            document.getElementById("direccion").value = valor;
            break;
        }
    }
}

function obtenerFechaExpiracion() {
    const expiracion = new Date();
    expiracion.setFullYear(expiracion.getFullYear() + 1); // Caduca en 1 año

    return expiracion.toUTCString();
}
