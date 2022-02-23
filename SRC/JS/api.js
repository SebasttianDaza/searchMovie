import { API_KEY } from "./main.js";
import { showUserData } from "./modifcationHTML.js";
import  { changeApiLocalStorage } from "./localStorage.js"
import { getPosterPath } from "./ciclos.js";


let dat;
export let contableChangeLocalStorage;


export async function getUserData(movie) {
  try {
    //*Obtener datos de la API con fetch

    fetch(API_KEY + movie)
      .then((response) => response.json())
      .then((data) => {
        //*Reconocer si hay datos
        if (data.results.length === 0) {
          throw new Error("No results");
        }
        //* Si hay datos
        else {
          const date = data;
          date.imgData = getPosterPath(data.results);
          showUserData(date);
        }

        dat = data;
      }) //*Guardar datos en una variable
      .then(() => {
        //*Convertir datos Object a Array
        const valor = Object.values(dat);

        changeApiLocalStorage(valor);
        contableChangeLocalStorage++;
      });
  } catch (error) {
    showError(error.message);
  }
}

function showError(error) {
  result.innerHTML = `<p>${error}</p>`;
  console.error("Encontramos un error: ", error);
}