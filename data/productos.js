let productos = [
  {
    codigo: "P001",
    nombre: "Lámpara de mesa",
    precio: 39.99,
    categoria: "Iluminación",
    imagen: "https://ejemplo.com/imagen1.jpg",
    descripcion:
      "Lámpara de mesa moderna con base de metal y pantalla de tela.",
    stock: 15,
  },
  {
    codigo: "P002",
    nombre: "Cojín decorativo",
    precio: 19.99,
    categoria: "Decoración",
    imagen: "https://ejemplo.com/imagen2.jpg",
    descripcion: "Cojín decorativo con estampado floral y relleno de plumas.",
    stock: 8,
  },
  {
    codigo: "P003",
    nombre: "Mesa de centro",
    precio: 149.99,
    categoria: "Muebles",
    imagen: "https://ejemplo.com/imagen3.jpg",
    descripcion: "Mesa de centro de madera maciza con acabado en barniz.",
    stock: 3,
  },
  {
    codigo: "P004",
    nombre: "Cortinas opacas",
    precio: 29.99,
    categoria: "Textiles",
    imagen: "https://ejemplo.com/imagen4.jpg",
    descripcion:
      "Cortinas opacas de alta calidad para bloquear la luz exterior.",
    stock: 12,
  },
  {
    codigo: "P005",
    nombre: "Espejo de pared",
    precio: 79.99,
    categoria: "Espejos",
    imagen: "https://ejemplo.com/imagen5.jpg",
    descripcion: "Espejo de pared con marco de metal dorado envejecido.",
    stock: 5,
  },
  {
    codigo: "P006",
    nombre: "Juego de sábanas",
    precio: 49.99,
    categoria: "Textiles",
    imagen: "https://ejemplo.com/imagen6.jpg",
    descripcion: "Juego de sábanas de algodón suave y resistente.",
    stock: 20,
  },
];

class Producto {
  constructor(codigo, nombre, precio, categoria, imagen, descripcion, stock) {
    this.codigo = codigo;
    (this.nombre = nombre),
      (this.precio = precio),
      (this.categoria = categoria),
      (this.imagen = imagen),
      (this.descripcion = descripcion),
      (this.stock = stock);
  }
}

export { productos, Producto };
