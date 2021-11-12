
//*Obtener el formulario, barra de busquedad y el boton

const form = document.getElementById('form');
const search = document.getElementById('search');
const age = document.getElementById('search2');
const btn = document.getElementById('btn');
const result = document.getElementById('resultado');



//*Escuchar el evento click

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const movie = search.value;
    
    getUserData(movie);
    search.value = '';
})

//*Obtener info de API

async function getUserData(movie) {
    const API_KEY =
      "https://api.themoviedb.org/3/search/movie?api_key=903ef257505ba6636ff7c0212d7d9f0c&language=es&query=";

    

    try {
        //*Obtener datos de la API
        const userRequest = await fetch(API_KEY + movie);
        const userData = await userRequest.json();


        if (userData.results.length === 0) {
            throw new Error('No results');
        }

        
        //*Obtener poster de pelicula
        const imgKey = "https://image.tmdb.org/t/p/w500/";
        const imgData = imgKey + userData.results[0].poster_path;
        userData.imgData = imgData;

        //*Obtener poster de pelicula para los otros resultados
        const imgData1 = imgKey + userData.results[1].poster_path;
        userData.imgData1 = imgData1;

        const imgData2 = imgKey + userData.results[2].poster_path;
        userData.imgData2 = imgData2;

        const imgData3 = imgKey + userData.results[3].poster_path;
        userData.imgData3 = imgData3;

        
         
    
        

        //Saber si tiene mas de 3 resultados
        showUserData(userData);



       

    } catch (error) {
        showError(error.message);
    
    }

    

}

//*function para modificar HTML


function showUserData(userData) {
    console.log(userData);
    let userContent = `
        <img src="${userData.imgData}" alt="Imagen de Poster de Pelicula">
            <br>
            <h1>${userData.results[0].original_title}</h1>

            <section class="data">
                <ul>
                    <li class="lanzamiento">${userData.results[0].release_date}</li>
                    <li>${userData.results[0].popularity}</li>
                </ul>
            </section>
            <div class="otrosResultado">
                <p>Otros resultados</p>
                <img onclick='newRequest()' src="${userData.imgData1}" alt="" id='imgData1'>
                <img onclick='newRequest()' src="${userData.imgData2}" alt="">
                <img onclick='newRequest()' src="${userData.imgData3}" alt="">
            </div>
    `;

    result.innerHTML = userContent;

}

//*Funcion de Errores

function showError(error) {}

//*Funcion de los demas resultados

function newRequest() {
    location.href = "Paginas/resultado.html";
    features();
}


