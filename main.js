//*Obtener el formulario, barra de busquedad y el boton

const form = document.getElementById('form');
const search = document.getElementById('search');
const age = document.getElementById('search2');
const btn = document.getElementById('btn');
const result = document.getElementById('resultado');

form

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
        const userRequest = await fetch(API_KEY + movie);
        const userData = await userRequest.json();


        if (userData.results.length === 0) {
            throw new Error('No results');
        }

        

        
        const imgKey = "https://api.themoviedb.org/3/movie/";
        const imgMovie = await fetch(
            imgKey +
            userData.results[0].id +
            "/images?api_key=903ef257505ba6636ff7c0212d7d9f0c&language=es");
        const imgData = await imgMovie.json();
        userData.imgData = imgData;
         
    
        

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
                <img src="img/imagen.jpg" alt="">
                <img src="img/imagen.jpg" alt="">
                <img src="img/imagen.jpg" alt="">
            </div>
    `;

    result.innerHTML = userContent;

}

//*Funcion de Errores

function showError(error) {}