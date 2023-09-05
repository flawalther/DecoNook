let auth = JSON.parse(localStorage.getItem("auth")) || null;
let contenido = document.querySelector("#main");
let boton = document.querySelector("#logOut");

// let peli1 = new Pelicula();

if (!auth) {
  boton.classList = "d-none";
  contenido.innerHTML = "";
  let mensaje = document.createElement("div");
  mensaje.classList = "alert alert-danger";
  mensaje.role = "alert";
  mensaje.innerText =
    "Lo siento, no tiene permisos para acceder a esta sección";
  contenido.append(mensaje);
}

const cerrarSesion = () => {
  //borrar datos del usuario en localstorage
  //redireccionar al home

  localStorage.removeItem("auth");
  location.replace("/");
};

boton.addEventListener("click", cerrarSesion);
