//*Obtener todos los elementos de la pagina
/**
 * @param {form} formulario Obtenmos el formulario de busquedad
 * @param {search} input Obtenemos el valor del input
 * @param {btn} button Obtenemos el boton
 * @param {result} result Obtenemos el div donde se mostraran los resultados
 */

const form = document.getElementById("form");
const search = document.getElementById("search");
const age = document.getElementById("search2");
const btn = document.getElementById("btn");
const result = document.getElementById("resultado");

//*Agregamos el evento al elemento

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const movie = search.value;

  getUserData(movie);
  search.value = "";
});

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
        const valoer = Object.values(dat);
        //*Poder manteener los datos en una variable ||| Aqui quedamos con los datos de la API
        changeApi(valoer);
      });

    //*Console para mostrar info
    console.info("Estamos procesando los datos de la API");
  } catch (error) {
    showError(error.message);
  }
}

//*Obetener Poster Path dinamicamente

function getPosterPath(movie) {
  const arrPoster = [];
  const imgKey = "https://image.tmdb.org/t/p/w500/";
  for (let i = 0; i < movie.length; i++) {
    arrPoster.push(imgKey + movie[i].poster_path);
  }

  return arrPoster;
}

//*function para modificar HTML

function showUserData(data) {
  let userContent = `
        <img src="${data.imgData[0]}" alt="Imagen de Poster de Pelicula">
            <br>
            <h1>${data.results[0].original_title}</h1>

            <section class="data">
                <ul>
                    <li class="lanzamiento">${data.results[0].release_date}</li>
                    <li>${data.results[0].popularity}</li>
                </ul>
            </section>
            <div class="otrosResultado">
                <p>Otros resultados</p>
                <img onclick='newRequest()' src="${data.imgData[1]}" alt="" id='imgData1'>
                <img onclick='newRequest()' src="${data.imgData[2]}" alt="">
                <img onclick='newRequest()' src="${data.imgData[3]}" alt="">
            </div>
    `;

  result.innerHTML = userContent;
}

//*Funcion de Errores

function showError(error) {
  result.innerHTML = `<p>${error}</p>`;
  console.error("Encontramos un error: ", error);
}

//Guardar datos en localStorage

function changeApi(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
