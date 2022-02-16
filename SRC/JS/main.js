import { changeLight } from "./theme.js"; //Funcion para cargar theme
import { setTemplate, changeApiLocalStorage } from "./localStorage.js";
import { getPosterPath } from "./ciclos.js";

//*Obtener todos los elementos de la pagina
/**
 * @param {form} formulario Obtenmos el formulario de busquedad
 * @param {search} input Obtenemos el valor del input
 * @param {btn} button Obtenemos el boton
 * @param {result} result Obtenemos el div donde se mostraran los resultados
 */

const form = document.getElementById("forma");
const search = document.getElementById("Search");
const btn = document.getElementById("btn");
export const result = document.getElementById("resultado");

// Delegacion of events

document.addEventListener("click", (e) => {
  // Event principal of form the search
  if(e.target.matches("#btn")){
    if ( search.value.length === 0 ) {console.log("No hay datos");}
    e.preventDefault();
    const movie = search.value;
    getUserData(movie);
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

//*Obtener info de API

/**
 *  @param {API_KEY} variable que contiene la llave de la API
 */
const API_KEY =
  "https://api.themoviedb.org/3/search/movie?api_key=903ef257505ba6636ff7c0212d7d9f0c&language=es&query=";

/**
 * {getUserData} Function para obtener la data de la API
 * @param {userRequest} variable que contiene la peticion de la API
 * @param {obj} variable que contiene la data de la API
 */

let dat;
export let contableChangeLocalStorage;

async function getUserData(movie) {
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

//*function para modificar HTML

async function showUserData(data) {
  let userContent = `
      <section class="container">
        <div class="image" style="background-image: url(${data.imgData[0]});">
           <div id="info">
               <p id="headline">${data.results[0].original_title}</p>
            </div>
        </div>

                <div class="data">
                    <h1>${data.results[0].original_title}</h1>
                    <p>${data.results[0].overview}</p>
                    <ul>
                        <p>Fecha de Lanzamiento</p>
                        <p>Reaiting</p>
                        <li>${data.results[0].release_date}</li>
                        <li>${data.results[0].popularity}</li>
                    </ul>
                
                
                
                </div>
                
      </section>
                <h2>Otros resultados</h2>
            
                <div id="father" class="otrosResultados">
                
                  <div>
                    <h3 class="one">${data.results[1].title}</h3>
                    <img src="${data.imgData[1]}" alt="">
                  </div>
                  <div>
                    <h3 class="second">${data.results[2].title}</h3>
                    <img src="${data.imgData[2]}" alt="">
                  </div>
                  <div>
                    <h3 class="third">${data.results[3].title}</h3>
                    <img src="${data.imgData[3]}" alt="">
                  </div>
                </div>
    `;
  result.innerHTML = userContent;

  // Guardar datos en local
  await setTemplate(userContent);
}

//*Funcion de Errores

function showError(error) {
  result.innerHTML = `<p>${error}</p>`;
  console.error("Encontramos un error: ", error);
}




