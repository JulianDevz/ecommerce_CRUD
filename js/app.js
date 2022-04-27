import { valida } from "./validaciones-formularios.js";

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});