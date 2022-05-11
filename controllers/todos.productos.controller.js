import { clientServices } from "../services/client-service.js";

//Creando la card del producto
const MostrarProductosAdmin = (nombre, precio, descripcion, imagen, id, categoria) => {
  //Creando el div que guarda todo el card
  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card";
  const contenido = `
  <div class="producto__card__imagen" style="background-Image: url(${imagen})">
  </div>
  <h3 class="producto__card__titulo">${nombre}</h3>
  <p class="producto__card__precio">${precio}</p>
  <a class="producto__card__boton" href="./ver-producto.html">Ver producto</a>
  `
  cardProducto.innerHTML = contenido;
  return cardProducto;
}

//Capturando la seccion para mostrar los productos
const productosAdmin = document.querySelector("[data-productos-admin]");

//Recorrer los datos traidos del JSON
clientServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
    //Imprimir datos en el index
    const nuevoProducto = MostrarProductosAdmin(nombre, precio, descripcion, imagen, id, categoria);
    productosAdmin.appendChild(nuevoProducto);
  });
}).catch(error => alert("ocurrio un error"));
