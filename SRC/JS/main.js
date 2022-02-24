import { validationApi } from "./validationData.js";
import { changeLight } from "./theme.js"; //Funcion para cargar them
//*Obtener todos los elementos de la pagina
/**
 * @param {form} formulario Obtenmos el formulario de busquedad
 * @param {search} input Obtenemos el valor del input
 * @param {result} result Obtenemos el div donde se mostraran los resultados
 */

export const search = document.getElementById("Search");
export const result = document.getElementById("resultado");


// Delegacion of events

document.addEventListener("click", (e) => {
  // Event principal of form the search
  
  if(e.target.matches("#btn *")){
    validationApi(e);
  }
  // Event of the icon dark or light
  if( e.target.matches("#icon")){
    changeLight();
  }
  // Evento a los otros resultados
  if(e.target.matches("#father div h3 ")){
    newRequest(e);
  }
})

document.addEventListener("submit", (e) => {
  if(e.target.matches("#forma")){
    e.preventDefault();
  }
})

//*Obtener info de API

/**
 *  @param {API_KEY} variable que contiene la llave de la API
 */
export const API_KEY =
  "https://api.themoviedb.org/3/search/movie?api_key=903ef257505ba6636ff7c0212d7d9f0c&language=es&query=";










