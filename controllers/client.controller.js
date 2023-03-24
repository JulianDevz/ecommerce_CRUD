import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";

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
    if(categoria === "Star wars"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosStarWars.appendChild(nuevoProducto);
    }else if(categoria === "Consolas"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosConsolas.appendChild(nuevoProducto);
    }else if(categoria === "Diversos"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosDiversos.appendChild(nuevoProducto);
    }
  });
})



