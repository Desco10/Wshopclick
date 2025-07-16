const productos = [
   
    {
    nombre: "Advil Max",
    precio: "$20.000  sobre x 10",
    imagen: "img/Advimax.jpg",
    pagina: "productos/advilmax.html"
  },
  {
    nombre: "Bonfiest",
    precio: "$3297  unidad ",
    imagen: "img/bonfiest.png",
    pagina: "productos/bonfiest.html"
  },
  {
    nombre: "Sevedol Extra",
    precio: "$13200  sobre x 12 ",
    imagen: "img/sevedolrojo.jpg",
    pagina: "productos/sevedol.html"
  },
  
  
 {
    nombre: "Advil Fem",
    precio: "$22.300 sobre x 10",
    imagen: "img/AdvilFem.jpeg",
    pagina: "productos/advilfem.html"
  },






  {
    nombre: "ADVIL GRIPA",
    precio: "$23980  sobre x 10",
    imagen: "img/Advilgripa.jpg",
    pagina: "PRODUCTOS/advilgripa.html"
  },



  {
    nombre: "Advil Gripa max ",
    precio: "$23170 sobre x 10",
    imagen: "img/advilgripamax.jpg",
    pagina: "productos/gripamax.html"
  },
  {
   nombre: "AGUA OXIGENADA",
    precio: "$2179 unidad",
    imagen: "img/AGUAOXIGENEDA.jpg",
    pagina: "productos/aguaoxigena.html"
  },
 
  

 
  {
    nombre: " XRAYDOL",
    precio: "$12.000",
    imagen: "img/xraydol.jpg",
    pagina: "productos/xraydol.html"
  },
  {
    nombre: "PAX BEBIDA CALIENTE NOCHE ",
    precio: "$9.000",
    imagen: "img/pax.jpg",
    pagina: "productos/pax.html"
  },
  {
   nombre: "Advil Max",
    precio: "$10.000",
    imagen: "img/advilmax.jpeg",
    pagina: "productos/advilmax.html"
  },
  {
    nombre: "Bonfiest",
    precio: "$12.000",
    imagen: "img/bonfiest.png",
    pagina: "productos/bonfiest.html"
  },
  {
    nombre: "Sevedol Extra",
    precio: "$9.000",
    imagen: "img/sevedol_estra.jpeg",
    pagina: "productos/sevedol.html"
  },


 {
    nombre: "ADVIL GRIPA",
    precio: "$23980  sobre x 10",
    imagen: "img/Advilgripa.jpg",
    pagina: "PRODUCTOS/advilgripa.html"
  },



  {
    nombre: "Advil Gripa max ",
    precio: "$23170 sobre x 10",
    imagen: "img/advilgripamax.jpg",
    pagina: "productos/gripamax.html"
  },
  {
   nombre: "AGUA OXIGENADA",
    precio: "$2179 unidad",
    imagen: "img/AGUAOXIGENEDA.jpg",
    pagina: "productos/aguaoxigena.html"
  },
 
  

 
  {
    nombre: "Bonfiest",
    precio: "$12.000",
    imagen: "img/bonfiest.png",
    pagina: "productos/bonfiest.html"
  },
  













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
     
      <a href="https://wa.me/573143416441?text=Hola , quiero  comprar este producto: ${prod.nombre}%0AValor: ${prod.precio}%0A${window.location.origin}/${prod.pagina}"
         target="_blank" class="btn-wsp">
        <i class="fab fa-whatsapp"></i> COMPRAR
    
    `;
    contenedor.appendChild(card);
  });

  document.getElementById("paginaActual").textContent = `Página ${paginaActual}`;
}

function siguientePagina() {
  const productosParaMostrar = productosFiltrados !== null ? productosFiltrados : productos;
  const totalPaginas = Math.ceil(productosParaMostrar.length / productosPorPagina);
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


let productosFiltrados = null;

const carrusel = document.getElementById("carrusel");
let items = carrusel.querySelectorAll(".item");

// Duplicar carrusel para bucle infinito
carrusel.innerHTML += carrusel.innerHTML;
items = carrusel.querySelectorAll(".item");

let position = 0;
const velocidad = 0.5;
const anchoTotal = carrusel.scrollWidth / 2;

function moverCarrusel() {
  position += velocidad;
  if (position >= anchoTotal) position = 0;
  carrusel.scrollLeft = position;
  resaltarItemCentral();
}

function resaltarItemCentral() {
  const centro = carrusel.scrollLeft + carrusel.clientWidth / 2;

  items.forEach((item) => {
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const isActive = Math.abs(centro - itemCenter) < item.clientWidth / 2;

    item.classList.toggle("active", isActive);

    if (isActive) {
      const img = item.querySelector("img");
      const nombre = img.getAttribute("data-nombre");
      const precio = img.getAttribute("data-precio");
      const pagina = img.getAttribute("data-pagina");

      item.onclick = () => {
        const urlCatalogo = `${window.location.origin}/${pagina}`;
        const mensaje = `Hola, quiero comprar este producto: ${nombre}%0AValor: ${precio}%0A${urlCatalogo}`;
        window.open(`https://wa.me/573143416441?text=${mensaje}`, "_blank");
      };
    } else {
      item.onclick = null;
    }
  });
}

setInterval(moverCarrusel, 10); // movimiento constante



document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});


// BUSCADOR 
function filtrarProductos() {
  const textoBusqueda = document.getElementById("buscador").value.toLowerCase().trim();
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  // Si el campo de búsqueda está vacío, volver a mostrar todo el catálogo normal
  if (textoBusqueda === "") {
    mostrarProductos();
    return;
  }

  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(textoBusqueda)
  );

  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
  } else {
    productosFiltrados.forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <a href="https://wa.me/573143416441?text=Hola, quiero comprar este producto: ${prod.nombre}%0AValor: ${prod.precio}%0A${window.location.origin}/${prod.pagina}"
           target="_blank" class="btn-wsp">
          <i class="fab fa-whatsapp"></i> COMPRAR
        </a>
      `;
      contenedor.appendChild(card);
    });
  }
}
