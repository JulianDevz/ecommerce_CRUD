//Conexion
const listaProductos = () => fetch('https://ecommerce-juliandevz.herokuapp.com/productos').then(respuesta => respuesta.json());

const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
  return fetch('https://ecommerce-juliandevz.herokuapp.com/productos', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, precio, imagen,  id:uuid.v4(), categoria, descripcion})
  });
};

//Detalles del producto por ID
const detalleProducto = async (id) => {
  return fetch(`https://ecommerce-juliandevz.herokuapp.com/productos/${id}`).then( respuesta => respuesta.json());
};

export const clientServices = {
  listaProductos,
  detalleProducto,
  crearProducto
};



