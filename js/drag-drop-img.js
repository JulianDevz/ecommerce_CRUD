const dropArea = document.querySelector("[data-drag-area]"),
dragText = dropArea.querySelector("p")

const input = document.querySelector(".agregar__imagen__boton");

let file; //Variable global a usar en multiples funciones

//Cargando archivo con boton
input.addEventListener("change", function(){
  //si el usuario selecciona varios archivos solo tomaremos el primero
  file = this.files[0];
  mostrarArchivo();
});

//Si el usuario arrastra el archivo sobre el area de arrastre
dropArea.addEventListener("dragover", (evento) => {
  evento.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelte el archivo para cargarlo";
})

//Si el usuario deja el archivo afuera del area de arrastre
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastre para agregar una imagen para el producto";
})

//Si el usuario dejo el archivo dentro del area de arrastre
//Cargando archivo dentro del drag
dropArea.addEventListener("drop", (evento) => {
  evento.preventDefault();
  file = evento.dataTransfer.files[0]; //si el usuario selecciona varios archivos solo tomaremos el primero
  mostrarArchivo();
})


let fileURL; 
const mostrarArchivo = () => {
  let tipoArchivo = file.type;
  let validarExtensiones = ["image/jpeg", "image/jpg", "image/png"]//Validar los tipos de archivo a recibir
  if(validarExtensiones.includes(tipoArchivo)){ //si el tipo de archivo que estamos subiendo es de formato valido
    let fileReader = new FileReader(); //Creando el objeto lector
    fileReader.onload = () => {
      fileURL = fileReader.result; //pasando el archivo en una archivo tipo enlace
      let imgTag = `<img src="${fileURL}" alt="" style="width:100%; height:100%; border-radius:5px">`; //Creando el campo donde se vera la imagen que selecciono el usuario
      dropArea.innerHTML = imgTag; //Agregando la imagen a la zona drag
    }
    fileReader.readAsDataURL(file)
  }else{
    Swal.fire({
      title: 'La imagen no tiene un formato valido, debe ser jpeg, jpg o png',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    dragText.textContent = "Arrastre para agregar una imagen para el producto";
  }
}
