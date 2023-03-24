import { clientServices } from "../services/client-service.js";
import { adminControler } from "./admin.controller.js";

//Nueva busqueda
const productos = document.querySelector("[data-productos-admin]");
const buscador = document.querySelector("[data-buscador]");
const tituloBusqueda = document.querySelector("[data-titulo-busqueda]");
let cantResultNuevaBusqueda = 0;

//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("keypress", evento => {
  let texto = evento.target.value;
    if (evento.key === 'Enter') {
      texto = texto.toLowerCase();
      buscador.value = "";
      const limpiarContenido = ``;
      productos.innerHTML = limpiarContenido;
      
      clientServices.listaProductos().then(data => {
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
          const nombreProducto = nombre.toLowerCase();
          const validar = nombreProducto.includes(texto);

          if(validar){
            const mostrarProductoBuscado = adminControler.MostrarProductosAdmin(nombre, precio, descripcion, imagen, id, categoria);
            productos.appendChild(mostrarProductoBuscado);
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
  
  
