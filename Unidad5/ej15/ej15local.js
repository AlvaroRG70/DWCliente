document.addEventListener("DOMContentLoaded", function() {
    cargarDireccion(); // Llama a la función al cargar la página
});

function guardarDireccion() {
    const direccion = document.getElementById("direccion").value;

    // Guardar dirección en localStorage
    localStorage.setItem("direccionEnvio", direccion);

    alert("Dirección de envío guardada correctamente.");
}

function cargarDireccion() {
    const direccion = localStorage.getItem("direccionEnvio");

    if (direccion) {
        // Rellenar automáticamente el campo del formulario con la dirección almacenada
        document.getElementById("direccion").value = direccion;
    }
}
