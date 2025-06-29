// Carrusel automático
let carrusel = document.getElementById("carruselOfertas");
let desplazamiento = 0;

function moverCarrusel() {
  desplazamiento += 310; // ancho aproximado de cada imagen + espacio
  if (desplazamiento >= carrusel.scrollWidth - carrusel.clientWidth) {
    desplazamiento = 0;
  }
  carrusel.scrollTo({
    left: desplazamiento,
    behavior: 'smooth'
  });
}

setInterval(moverCarrusel, 3000); // cada 3 segundos
