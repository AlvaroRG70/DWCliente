function drag(ev) {
    // Clonar el elemento arrastrado
    var clone = ev.target.cloneNode(true);
    
    // Establecer el efecto de copia
    ev.dataTransfer.effectAllowed = "copy";
    
    // Transferir el clon en lugar del elemento original
    ev.dataTransfer.setDragImage(clone, 0, 0);
    ev.dataTransfer.setData("text", ev.target.textContent);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elemento = document.createElement("p");
    elemento.textContent = data;
    ev.target.appendChild(elemento);
}
