import { result } from "./main.js";
import { contableChangeLocalStorage } from "./api.js";

// Get all template for guard localStorage

export function setTemplate(data) {
    if (typeof data !== "undifined" && data !== null) {
        localStorage.setItem("template", JSON.stringify(data));
    } else {
        result.innerHTML = `<p>No se estan guardando los datos</p>`;
    }
}


//

export async function changeApiLocalStorage(data) {
  await validationLocalStorage(contableChangeLocalStorage);
  localStorage.setItem("data", JSON.stringify(data));
}

//* Funcion para validar los datos

const validationLocalStorage = (contable) => {
  if (contable > 0) {
    localStorage.clear();
  }
};