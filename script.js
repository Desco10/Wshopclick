const productos = [
  {
    nombre: "Advil Max",
    precio: "$10.000",
    imagen: "img/advilmax.jpeg",
    pagina: "PRODUCTOS/producto-advilmax.html"
  },
  {
    nombre: "Bonfiest",
    precio: "$12.000",
    imagen: "img/bonfiest.png",
    pagina: "PRODUCTOS/producto-bonfiest.html"
  },
  {
    nombre: "Sevedol Extra",
    precio: "$9.000",
    imagen: "img/sevedol_estra.jpeg",
    pagina: "PRODUCTOS/producto-sevedol.html"
  }
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
      <a href="https://wa.me/573143416441?text=Hola, quiero este producto: ${prod.nombre}%0AValor: ${prod.precio}%0A${window.location.origin}/${prod.pagina}"
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

mostrarProductos();
