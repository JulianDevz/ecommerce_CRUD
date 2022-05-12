import { clientServices } from "../services/client-service.js";

console.log("si entro");

const formulario = document.querySelector("[data-form-registro]");
console.log(formulario);

formulario.addEventListener("submit", (eventoSubmit) => {
  console.log("entro al submit");
  eventoSubmit.preventDefault();
  const nombre = document.querySelector("[data-form-producto-nombre]").value;
  const precio = document.querySelector("[data-form-producto-precio]").value;
  const categoria = document.querySelector("[data-form-producto-categoria]").value;
  const descripcion = document.querySelector("[data-form-producto-descripcion]").value;

  console.log(nombre, precio, categoria, descripcion, fileURL);

  clientServices
  .crearProducto(nombre, precio, fileURL, categoria, descripcion)
  .then(() => {
    console.log("envio exitoso");
  }).catch((err) => console.log(err));

});







