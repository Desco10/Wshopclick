const productos = [
  {
    nombre: "Advil Max",
    precio: "$20.000  sobre x 10",
    imagen: "img/advilmax.jpeg",
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
    imagen: "img/sevedol_estra.jpeg",
    pagina: "productos/sevedol.html"
  },
  {
   nombre: " ACEITE ALMENDRAS",
    precio: "$1538 unidad ",
    imagen: "img/ACEITEALMENDRAS.jpg",
    pagina: "productos/aceitealmendras.html"
  },
  {
    nombre: "ACEITE BEBE",
    precio: "$4000 unidad ",
    imagen: "img/ACEITEBEBE.jpg",
    pagina: "productos/aceitebebe.html"
  },
  {
    nombre: " ACETAMINOFEN TABLETA",
    precio: "$9.000 caja x 100",
    imagen: "img/ACETAMINOFEN.jpg",
    pagina: "productos/acetaminofentableta.html"
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
    nombre: "ALCOHOL 120 ML",
    precio: "$2179 unidad ",
    imagen: "img/ALCOHOL120.jpg",
    pagina: "productos/alcohol120.html"
  },
  {
    nombre: "Alcohol 345 ml",
    precio: "$3498 unidad ",
    imagen: "img/ALCOHOL345.jpg",
    pagina: "productos/alcohol345.html"
  },

  {
    nombre: "ALGODON 20 gr",
    precio: "$1498 unidad ",
    imagen: "img/ALGODON.jpg",
    pagina: "productos/algodon.html"
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
