window.addEventListener("load", inicializar);

function inicializar() {
  let contador = 0
  let p = document.createElement('p')
  p.innerHTML = contador + '/145'

  var textoid = document.getElementById('texto')
  textoid.addEventListener('input', contar)
  
  var div = document.getElementById('contenedor')
  div.appendChild(p)

  function contar() {
    contador = textoid.value.length;
    p.innerHTML = contador + '/145'
  }
}   