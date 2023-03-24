//Creando la card del producto
export const MostrarProductos = (nombre, precio, descripcion, imagen, id, categoria) => {
  //Creando el div que guarda todo el card
  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card";
  const contenido = `
    <div class="producto__card__imagen" style="background-Image: url(${imagen})"></div>
    <h3 class="producto__card__titulo">${nombre}</h3>
    <p class="producto__card__precio">${precio}</p>
    <a class="producto__card__boton" href="../screens/ver-producto.html?id=${id}">Ver producto</a>
  `
  cardProducto.innerHTML = contenido;
  return cardProducto;
}