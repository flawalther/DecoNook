import { productos } from "../data/productos.js";

let parametros = location.search.split("?posicion=");

let posicion = parametros[1];

console.log(posicion);

document.querySelector("h1").innerText = productos[posicion].nombre;
document.querySelector("#portada").src = productos[posicion].imagen;
document.querySelector("#portada").alt = productos[posicion].titulo;
document.querySelector("#descripcion").innerText =
  productos[posicion].descripcion;
document.querySelector("#categoria").innerText = productos[posicion].categoria;
document.querySelector("#precio").innerText = productos[posicion].precio;
