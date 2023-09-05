const listaProductos=()=>{
    document.write("Productos:<br>")
    productos.forEach(function(producto){
    document.write(`<ul>
    <li>  Producto: ${producto.nombre}  </li>
    <li>  Detalle: ${producto.detalle}  </li>
    <li>  Precio: ${producto.precio}  </li>
    </ul>`);
    
    }
    ) 
     }
    
     const busqueda=(buscar)=>{
        let resultadoDeBusqueda= productos.filter(function(producto){
            return producto.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
        });
        return resultadoDeBusqueda;
     }