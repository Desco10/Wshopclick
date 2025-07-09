const productos = [
    { nombre: "Advil Max", precio: "10000", imagen: "advilmax.jpeg" },
  { nombre: "Bonfiest", precio: "12000", imagen: "bonfiest.jpg" },
  { nombre: "Sevedol Extra", precio: "9000", imagen: "sevedol_estra.jpeg" },


 { nombre: "Advil Gripa", precio: "10000", imagen: "advilgripa.jpg" },
  { nombre: "Bonfiest", precio: "12000", imagen: "bonfiest.jpg" },
  { nombre: "Advil Gripa Max", precio: "9000", imagen: "advilgripamax.jpg" }












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
      <a href="producto.html?nombre=${encodeURIComponent(prod.nombre)}&valor=${prod.precio}&imagen=${prod.imagen}" class="fab fa-whatsapp"></i> COMPRAR    
      <a href="https://wa.me/573143416441?text=Hola , quiero  comprar este producto: ${prod.nombre}%0AValor: ${prod.precio}%0A${window.location.origin}/${prod.pagina}"
         target="_blank" class="btn-wsp">
        <i class="fab fa-whatsapp"></i> COMPRAR
    
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
    window.scrollTo({
      top: document.querySelector(".catalogo").offsetTop,
      behavior: 'smooth'
    });
  }
}

function anteriorPagina() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
    window.scrollTo({
      top: document.querySelector(".catalogo").offsetTop,
      behavior: 'smooth'
    });
  }
}
