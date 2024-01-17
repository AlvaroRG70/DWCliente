window.addEventListener("load", inicializar)

function inicializar() {

    cargarPreferencias()

    function enviarNombre(){
        var nombre = document.getElementById('nombre')

        guardarPreferencias(nombre)

        alert(`Hemos guardado el nombre; ${nombre.value}.`);
    
    }

    function guardarPreferencias(nombre) {
        // Crear un objeto con las preferencias del usuario
        const preferenciasUsuario = {
            nombre: nombre.value
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
            alert(`Hola ${preferenciasObjeto.nombre}!`);
        }
    }
    

    document.getElementById('boton').addEventListener('click',enviarNombre)

    
}