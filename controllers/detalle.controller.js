import { clientServices } from "../services/client-service.js";

const obtenerInformacion = async () => {

  const url = new URL(window.location);
  const id = url.searchParams.get("id"); //Extraccion ID de la URL

  if(id === null){
    console.log("Hubo error al momento de buscar el producto")
  }

  //Traemos la informacion del producto que fue clickado
  try{
    const producto = await clientServices.detalleProducto(id);
    console.log(producto.nombre);
    //Validamos que ese ID tenga informacion
    if(producto.nombre && producto.precio && producto.descripcion && producto.imagen){
      //Contenedo de la informacion
      const infoProducto = document.querySelector("[data-producto]");

      const contenido = `
        <img class="producto__imagen" src="${producto.imagen}" alt="producto star wars">
        <div class="producto__info">
            <h2 class="producto__info__titulo">${producto.nombre}</h2>
            <p class="producto__info__valor">${producto.precio}</p>
            <p class="producto__info__descripcion">${producto.descripcion}</p>
        </div>
      ` 
      infoProducto.innerHTML = contenido;
    }else{
      throw new error();
    }
  }catch(error){
    console.log("catch error", error);
  }
} 
obtenerInformacion();