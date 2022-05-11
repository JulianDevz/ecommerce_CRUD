import { clientServices } from "../services/client-service.js";

// //Destructuring de JSON
// const MostrarDatosProducto = (nombre, precio, descripcion, imagen, id, categoria) => {
//   const producto = document.querySelector("[data-producto]");
//   // const contenido = `
//   //   <img class="producto__imagen" src="${imagen}" alt="producto star wars">
//   //   <div class="producto__info">
//   //       <h2 class="producto__info__titulo">${nombre}</h2>
//   //       <p class="producto__info__valor">${precio}</p>
//   //       <p class="producto__info__descripcion">${descripcion}</p>
//   //   </div>
//   // `
//   // producto.innerHTML = contenido;

// }
// MostrarDatosProducto();


//Creando la card del producto
const MostrarProductos = (nombre, precio, descripcion, imagen, id, categoria) => {
  //Creando el div que guarda todo el card
  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card";
  const contenido = `
    <div class="producto__card__imagen" style="background-Image: url(${imagen})"></div>
    <h3 class="producto__card__titulo">${nombre}</h3>
    <p class="producto__card__precio">${precio}</p>
    <a class="producto__card__boton" href="./ver-producto.html?id=${id}">Ver producto</a>
  `
  cardProducto.innerHTML = contenido;
  return cardProducto;
}

//Capturando la seccion de productos star wars
const productosStarWars = document.querySelector("[data-star-wars]");
//Capturando la seccion de consolas
const productosConsolas = document.querySelector("[data-consolas]");
//Capturando la seccion de consolas
const productosDiversos = document.querySelector("[data-diversos]");

//Recorrer los datos traidos del JSON
clientServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
    //Imprimir datos en el index
    if(categoria === "star wars"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosStarWars.appendChild(nuevoProducto);
    }else if(categoria === "consolas"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosConsolas.appendChild(nuevoProducto);
    }else if(categoria === "diversos"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosDiversos.appendChild(nuevoProducto);
    }

  });
}).catch( err => alert("Ocurrio un error"))