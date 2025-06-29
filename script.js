
const productos = [
  { nombre: "Advil Max", precio: "$10.000", imagen: "img/advilmax.jpeg" },
  { nombre: "Bonfiest", precio: "$12.000", imagen: "img/bonfiest.png" },
  { nombre: "Sevedol Extra", precio: "$9.000", imagen: "img/sevedol_estra.jpge" },
  // más productos aquí...
];



function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}</p>
      <a href="https://wa.me/573143416441?text=Hola, quiero este producto: ${encodeURIComponent(prod.nombre)}%0AValor: ${encodeURIComponent(prod.precio)}%0AImagen: ${location.origin}/${prod.imagen}"
         target="_blank" class="btn-wsp">WhatsApp</a>
    `;
    contenedor.appendChild(card);
  });
}

mostrarProductos();
