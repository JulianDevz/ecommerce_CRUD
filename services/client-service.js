//Conexion
const listaProductos = () => fetch('https://ecommerce-juliandevz.herokuapp.com/productos').then(respuesta => respuesta.json());

//Detalles del producto por ID
const detalleProducto = async (id) => {
  return fetch(`https://ecommerce-juliandevz.herokuapp.com/productos/${id}`).then( respuesta => respuesta.json());
}

export const clientServices = {
  listaProductos,
  detalleProducto,
}



