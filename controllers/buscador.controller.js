import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";

//contenedor de resultados
const resultados = document.querySelector("[data-productos-busqueda]");

const mostrarResultadoBuscado = async () => {

  const url = new URL(window.location);
  const nombreBuscado = url.searchParams.get("texto");

  if(nombreBuscado === null){
    console.log("Hubo un error al momento de buscar el producto");
  }

  //Resultados busqueda
  clientServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
      const nombreMinuscula = nombre.toLowerCase();
      if(nombreBuscado === nombreMinuscula){
        const mostrarResultadoBuscado = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
        resultados.appendChild(mostrarResultadoBuscado)
      }
    });
  }).catch( error => alert("Ocurrio un error en la busqueda"));
}
mostrarResultadoBuscado();



//Nueva busqueda
const buscador = document.querySelector("[data-buscador]");

//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("input", evento => {
  const texto = evento.target.value;
  buscador.addEventListener("keypress", eventoDos => {
    if (eventoDos.key === 'Enter') {
      
      clientServices.listaProductos().then(data => {
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
          if(texto === nombre){
            const mostrarProductoBuscado = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
            resultados.appendChild(mostrarProductoBuscado);
          }
        });
      })
    }
  });
});