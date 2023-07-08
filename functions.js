 // Obtener el botón por su clase
var botonCalculadora = document.querySelector('.calculadora_button');

 // Función para cambiar el color de fondo
function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}

 // Evento cuando se hace clic en el botón
botonCalculadora.addEventListener('click', function() {
  cambiarColorFondo('#ff0000'); // Cambiar a color rojo al hacer clic en el botón
})