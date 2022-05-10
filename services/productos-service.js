//Conexion
const listaProductos = () => fetch('https://api.jsonbin.io/b/627a001838be296761ff842a/1').then(respuesta => respuesta.json());
