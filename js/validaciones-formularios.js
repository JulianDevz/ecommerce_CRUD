export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

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

  //Inputs login

  usuario:{
    valueMissing:"El campo usuario no puede estar vacio",
  },
  contraseña:{
    valueMissing:"El campo contraseña no puede estar vacio",
  },

  //Inputs contactanos

  nombre:{
    valueMissing:"El campo Nombre no puede estar vacio"
  },
  mensaje:{
    valueMissing:"El campo Mensaje no puede estar vacio",
  },

  //Inputs agregar producto

  nombreProducto:{
    valueMissing:"El campo Nombre del Producto no puede estar vacio",
    patternMismatch:"El Nombre solo puede contener como maximo 40 caracteres"
  },
  precioProducto:{
    valueMissing:"El campo Precio del Producto no puede estar vacio",
    patternMismatch:"El Precio solo puede ser ingresado en numeros"
  },
  descripcionProducto:{
    valueMissing:"El campo Descripcion del Producto no puede estar vacio"
  }
}

const validadores = {

};

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje = "";
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}