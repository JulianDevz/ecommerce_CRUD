//Conexion
const listaProductos = () => fetch('https://ecommerce-juliandevz.herokuapp.com/productos').then(respuesta => respuesta.json());

export const clientServices = {
  listaProductos
}