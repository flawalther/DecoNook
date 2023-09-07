
import { productos, Producto } from "../data/productos.js";

localStorage.setItem("productos", JSON.stringify(productos));

let tabla = document.querySelector("#tablaAdm");

const myModal = new bootstrap.Modal(document.getElementById('productoModal'));

const cargarTabla = () => {
    tabla.innerHTML="";
    productos.map((producto, index) => {        
         let fila = document.createElement("tr");
         let celdas = `<td>${producto.codigo}</td><td>${producto.nombre}</td><td>${producto.precio}</td>
         <td>${producto.categoria}</td><td>${producto.stock}</td>
         <td><button class="btn btn-danger btn-sm mx-1" onclick="borrarProducto(${index})">X</button></td>
         <td><button class="btn btn-warning btn-sm px-1" onclick="modificarProducto(${index})">M</button></td>`;
         fila.innerHTML = celdas;
         tabla.append(fila);
    });
};
cargarTabla();

const nuevoProducto = () => {
    myModal.show();
    
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
};

const modificarProducto = (index)=>{
    document.querySelector("#inputcodigo").value = productos[index].codigo;
    document.querySelector("#inputnombre").value = productos[index].nombre;
    document.querySelector("#inputprecio").value = productos[index].precio;
    document.querySelector("#inputcategoria").value = productos[index].categoria;
    document.querySelector("#inputimagen").value = productos[index].imagen;
    document.querySelector("#inputdescripcion").value = productos[index].descripcion;
    document.querySelector("#inputstock").value = productos[index].stock;
    myModal.show();
};

const borrarProducto =(index)=>{
    let confirmacion = confirm (`Desea borrar el producto ${productos[index].nombre}?`);
    if (confirmacion){
        productos.slice(index,1);
        localStorage.setItem("productos", JSON.stringify(productos));
        cargarTabla();
    }
};


