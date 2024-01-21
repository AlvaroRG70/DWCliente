window.addEventListener("load", inicializar)

function inicializar() {

    cargarPreferencias();
    var nombre = document.getElementById('nombre');

    function enviarNombre() {
        guardarPreferencias(nombre);
        alert(`Hemos guardado el nombre: ${nombre.value}.`);
    }

    function guardarPreferencias(nombre) {
        // Crear un objeto con las preferencias del usuario
        const preferenciasUsuario = {
            nombre: nombre.value,
        };

        // Convertir el objeto a JSON y guardar como cookie
        document.cookie = "preferenciasUsuario=" + JSON.stringify(preferenciasUsuario) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
        
    }

    function cargarPreferencias() {
        // Obtener preferencias del usuario desde las cookies
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("preferenciasUsuario=")) {
                // Obtener el valor de la cookie y convertirlo a un objeto
                const preferenciasObjeto = JSON.parse(cookie.substring("preferenciasUsuario=".length, cookie.length));
                console.log(preferenciasObjeto);

                // Mostrar un mensaje con las preferencias almacenadas
                alert(`Hola ${preferenciasObjeto.nombre}!`);
                break; // Solo se necesita la primera cookie que cumple con la condición
            }
        }
    }

    document.getElementById('boton').addEventListener('click', enviarNombre);
}
