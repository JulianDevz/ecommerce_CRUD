export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

  console.log(input.parentElement)
  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajesDeError = {
  correo:{
    valueMissing:"El campo correo electronico no puede estar vacio",
    typeMismatch:"El correo electronico no es valido"
  },
  contraseñaLogin:{
    valueMissing:"El campo contraseña no puede estar vacio",
  },
  nombre:{
    valueMissing:"El campo Nombre no puede estar vacio"
  },
  mensaje:{
    valueMissing:"El campo Mensaje no puede estar vacio",
  },
  nombreProducto:{
    valueMissing:"El campo Nombre del Producto no puede estar vacio",
  },
  precioProducto:{
    valueMissing:"El campo Precio del Producto no puede estar vacio",
  },
  descripcionProducto:{
    valueMissing:"El campo Descripcion del Producto no puede estar vacio",
  }
}

const validadores = {
	nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje = "";
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error])
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}