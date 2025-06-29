const productos = [
  { nombre: "Advil max", precio: "$10.000", imagen: "img/advilmax.jpeg" },
  { nombre: "Producto 2", precio: "$12.000", imagen: "img/producto2.jpg" },
  { nombre: "Producto 3", precio: "$9.000", imagen: "img/producto3.jpg" },





  // ... agrega más productos
];






const productosPorPagina = 12;
let paginaActual = 1;

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  productosPagina.forEach(prod => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p>
    <a href="https://wa.me/573143416441?text=Hola quiero comprar: ${prod.nombre}%0AImagen: ${window.location.origin}/${prod.imagen}" 
       target="_blank" class="btn-wsp">WhatsApp</a>
  `;
  contenedor.appendChild(card);
});


  document.getElementById("paginaActual").textContent = `Página ${paginaActual}`;
}

function siguientePagina() {
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarProductos();
  }
}

function anteriorPagina() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
}

function enviarWhatsapp(nombre, imagen) {
  const mensaje = `Hola, quiero este producto: ${nombre}%0AImagen: ${window.location.origin}/${imagen}`;
  window.open(`https://wa.me/573143416441?text=${mensaje}`, "_blank");
}

mostrarProductos();
