import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form-registro]");
formulario.addEventListener("submit", (eventoSubmit) => {
  eventoSubmit.preventDefault();
  const nombre = document.querySelector("[data-form-producto-nombre]").value;
  const precio = document.querySelector("[data-form-producto-precio]").value;
  const categoria = document.querySelector("[data-form-producto-categoria]").value;
  const descripcion = document.querySelector("[data-form-producto-descripcion]").value;

  const nombreVaciar = document.querySelector("[data-form-producto-nombre]");
  const precioVaciar = document.querySelector("[data-form-producto-precio]");
  const categoriaVaciar = document.querySelector("[data-form-producto-categoria]");
  const descripVaciar = document.querySelector("[data-form-producto-descripcion]");
  const zonaDrag = document.querySelector("[data-drag-area]")
  const contenidoDrag = `
  <img class="imagen-drop-img" src="../assets/img/Vector-imagen.svg" alt="icono agrega imagen">
  <img class="imagen-drop-img__pantalla-mobile" src="../assets/img/Vector-imagen_mobile.svg" alt="icono agrega imagen">
  <p class="imagen-drop-texto">Arrastre para agregar una imagen para el producto</p>
  `
  //Enviando datos a la funcion que crea el producto
  clientServices
  .crearProducto(nombre, precio, fileURL, categoria, descripcion)
  .then(() => {
    console.log("envio exitoso");
    nombreVaciar.value = "";
    precioVaciar.value = "";
    categoriaVaciar.value = "";
    descripVaciar.value = "";
    zonaDrag.classList.remove("active");
    zonaDrag.innerHTML = contenidoDrag;
    Swal.fire(
      'Perfecto!',
      'Producto Creado!',
      'success'
    )
  }).catch((err) => console.log(err));
});







