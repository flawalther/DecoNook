import { productos, Producto } from "../data/productos.js";

localStorage.setItem("productos", JSON.stringify(productos));

let tabla = document.querySelector("#tablaAdm");

const myModal = new bootstrap.Modal(document.getElementById('productoModal'));
const myModal2 = new bootstrap.Modal(document.getElementById('productoModal2'));

const mostrarModal = ()=>{
        document.getElementById("form1").reset();
        myModal.show();
}

const botonAgregarProducto = document.getElementById("nuevoProducto");

botonAgregarProducto.addEventListener("click", mostrarModal);


const cargarTabla = () => {
    tabla.innerHTML="";
    productos.map((producto, index) => {        
         let fila = document.createElement("tr");
         let celdas = `<td>${producto.codigo}</td><td>${producto.nombre}</td><td>${producto.precio}</td>
         <td>${producto.categoria}</td><td>${producto.stock}</td>
         <td><button class="btn btn-danger btn-sm mx-1" onclick="borrarProducto(${index})">X</button></td>
         <td><button class="btn btn-warning btn-sm px-1" onclick="mostrarProducto(${index})">M</button></td>`;
         fila.innerHTML = celdas;
         tabla.append(fila);
    });
    
};
cargarTabla();

window.guardarProducto = (event) => {
    event.preventDefault();
    
    let cod = document.querySelector("#inputcodigo").value;
    let nom = document.querySelector("#inputnombre").value;
    let prec = document.querySelector("#inputprecio").value;
    let categ = document.querySelector("#inputcategoria").value;
    let imag = document.querySelector("#inputimagen").value;
    let descrip = document.querySelector("#inputdescripcion").value;
    let stoc = document.querySelector("#inputstock").value;

    let nuevoprod = new Producto (cod, nom, prec, categ, imag, descrip, stoc);
    productos.push(nuevoprod);
    localStorage.setItem("productos",JSON.stringify(productos));

    cargarTabla();

    myModal.hide();

};

window.modificarProducto = (event)=>{
    event.preventDefault();
    
    productos[posicion].codigo = document.getElementById("#inputcodigo2").value;
    productos[posicion].nombre = document.getElementById("#inputnombre2").value;
    productos[posicion].precio = document.getElementById("#inputprecio2").value;
    productos[posicion].categoria = document.getElementById("#inputcategoria2").value;
    productos[posicion].imagen = document.getElementById("#inputimagen2").value;
    productos[posicion].descripcion = document.getElementById("#inputdescripcion2").value;
    productos[posicion].stock = document.getElementById("#inputstock2").value;
// console.log(posicion)

    localStorage.setItem("productos",JSON.stringify(productos));

    myModal2.hide();

    cargarTabla();

};

let posicion = null;

window.mostrarProducto = (index) =>{
    posicion = index;

    document.querySelector("#inputcodigo2").value = productos[index].codigo;
    document.querySelector("#inputnombre2").value = productos[index].nombre;
    document.querySelector("#inputprecio2").value = productos[index].precio;
    document.querySelector("#inputcategoria2").value = productos[index].categoria;
    document.querySelector("#inputimagen2").value = productos[index].imagen;
    document.querySelector("#inputdescripcion2").value = productos[index].descripcion;
    document.querySelector("#inputstock2").value = productos[index].stock;
    
    myModal2.show();
};

window.borrarProducto =(index)=>{
    let confirmacion = confirm (`Desea borrar el producto ${productos[index].nombre}?`);
    if (confirmacion){
        productos.slice(index,1);
        localStorage.setItem("productos", JSON.stringify(productos));
        cargarTabla();
    }
};


