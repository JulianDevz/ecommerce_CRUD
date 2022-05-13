import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";

//Contenedor de resultados buscados
const resultados = document.querySelector("[data-productos-busqueda]");
const tituloBusqueda = document.querySelector("[data-titulo-busqueda]");

const mostrarResultadoBuscado = async () => {
  const url = new URL(window.location);
  const nombreBuscado = url.searchParams.get("texto");
  if(nombreBuscado === null){
    console.log("Hubo un error al momento de buscar el producto");
  }

  let cantidadResultados = 0;
  //Resultados busqueda
  clientServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
      const nombreMinuscula = nombre.toLowerCase();
      if(nombreBuscado === nombreMinuscula || nombreBuscado === nombre){
        const mostrarResultadoBuscado = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
        resultados.appendChild(mostrarResultadoBuscado);
        cantidadResultados++;
      }
    });
    //Mostrar mensajes cuando no haya resultados
    if(cantidadResultados == 0){
      const textoInformativo = `
      <h2 class="productos__resultados_mensaje">No se encontraron resultados para esta busqueda</h2>
      `
      tituloBusqueda.innerHTML = textoInformativo;
    }
  }).catch( error => alert("Ocurrio un error en producto buscado"));
}
mostrarResultadoBuscado();

//Nueva busqueda
const buscador = document.querySelector("[data-buscador]");
let cantResultNuevaBusqueda = 0;

//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("keypress", evento => {
  let texto = evento.target.value
    if (evento.key === 'Enter') {
      buscador.value = "";
      const limpiarContenido = ``;
      resultados.innerHTML = limpiarContenido;
      
      clientServices.listaProductos().then(data => {
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
          const nombreMinuscula = nombre.toLowerCase();
          if(texto === nombreMinuscula || texto === nombre){
            const mostrarProductoBuscado = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
            resultados.appendChild(mostrarProductoBuscado);
            cantResultNuevaBusqueda++;
          }
          if(cantResultNuevaBusqueda > 0){
            const tituloProductosexistente = `
            <h1 class="productos__head__titulo-principal">Resultados de busqueda</h1>
            `
            tituloBusqueda.innerHTML = tituloProductosexistente;
          }else if (cantResultNuevaBusqueda <= 0){
            const textoInformativo = `
            <h2 class="productos__resultados_mensaje">No se encontraron resultados para esta busqueda</h2>
            `
            tituloBusqueda.innerHTML = textoInformativo;
          }
        });
      });
    }
});
  
  
