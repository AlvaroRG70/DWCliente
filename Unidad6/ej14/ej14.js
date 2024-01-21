function drag(ev) {
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

function eliminarElemento(ev) {
    ev.preventDefault();
    ev.dataTransfer.clearData();
}
