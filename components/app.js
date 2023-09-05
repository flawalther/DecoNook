import { productos } from "../data/productos.js";

let contenedorDestacados = document.querySelector("#content-destacados");

const cargarProducto = () => {
  productos.map((producto, index) => {
    let col = document.createElement("div");
    col.classList = "col";

    let tarjeta = `<div class=card h100>
        <img src=${producto.imagen} class="card-img-top-destacados" alt=${producto.nombre}>        
        <div class="card-body-desctacados">
        <a href='/pages/detalle.html?posicion=${index}' class="nav-link">
        <h6 class="card-title">${producto.nombre}></h6>
        </a>
        <p class="card-text-destacados">${producto.descripcion}</p>
        </div>
        </div>`;
    col.innerHTML = tarjeta;
    contenedorDestacados.append(col);
  });
};

cargarProducto();