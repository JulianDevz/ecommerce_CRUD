import { clientServices } from "../services/client-service.js";

let id,imagen;
const obtenerInfoProducto = async () => {
  const url = new URL(window.location);
  id = (url.searchParams.get("id"));

  if(id === null){
    console.log("Hubo error al momento de traer la info de este producto");
  }

  const nombre = document.querySelector("[data-form-producto-nombre]");
  const precio = document.querySelector("[data-form-producto-precio]");
  const categoria = document.querySelector("[data-form-producto-categoria]");
  const descripcion = document.querySelector("[data-form-producto-descripcion]");
  const zonaDrag = document.querySelector("[data-drag-area]")
  
  try{
    const producto = await clientServices.detalleProducto(id);
    console.log(producto);
    if(producto.nombre && producto.precio && producto.descripcion && producto.imagen && producto.categoria){
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      categoria.value = producto.categoria;
      descripcion.value = producto.descripcion;
      imagen = producto.imagen;

      let imgTag = `<img src="${producto.imagen}" alt="" style="width:100%; height:100%; border-radius:5px">`;
      zonaDrag.innerHTML = imgTag;
      zonaDrag.classList.add("active");
    }
  }catch(error){
    console.log("catch error", error);
  }
}
obtenerInfoProducto();



const formulario = document.querySelector("[data-form-registro]");
formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const zonaDrag = document.querySelector("[data-drag-area]"),
  imagen = zonaDrag.querySelector("img").src;

  const nombre = document.querySelector("[data-form-producto-nombre]").value;
  const precio = document.querySelector("[data-form-producto-precio]").value;
  const categoria = document.querySelector("[data-form-producto-categoria]").value;
  const descripcion = document.querySelector("[data-form-producto-descripcion]").value;

  clientServices.actualizarProducto(nombre, precio, imagen, id, categoria, descripcion).then(() => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto editado',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(function(){
      window.location.href = "../screens/admin-productos.html";
    }, 2000);
  })

})