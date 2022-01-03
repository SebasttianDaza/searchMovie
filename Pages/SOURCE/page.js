
//*Declaracion de variables

const btnBack = document.getElementById("btnVolver");
// Funcion de data
let nombre;
const results = document.getElementById("results");

//*Declaracion de eventos

btnBack.addEventListener("click", () => {
  location.href = "../../index.html";
});

//* Function para cargar plantilla

function getLocal () {
  if (localStorage.getItem("data")) {
    //Obtener data de localStorage
    nombre = JSON.parse(localStorage.getItem("data"));
    //Convertir data de localStorage a un Object
    Object.assign({}, nombre);
    showLocal(nombre);
  } else  {
    console.warn('No hay datos, intente nuevamente');
  }
  
}

getLocal();


// Filtrar datos

function filterArr(data) {
  return data.slice(1,1);
  //.filter(index => index > 4 && index < 7);
}

function filterImage(nombre) {
  console.log("Hola");
}



// Modificar plantilla

function showLocal(nombre) {
 let userContent = `
        <img src="${nombre[4][4]}" alt="Imagen de Poster de Pelicula">
            <br>
            <h1>${nombre[1][4].original_title}</h1>

            <section class="data">
                <ul>
                    <li class="lanzamiento">${nombre[1][4].release_date}</li>
                    <li>${nombre[1][4].popularity}</li>
                </ul>
            </section>
            <div class="otrosResultado">
                <p>Otros resultados</p>
                <img onclick='newRequest()' src="${nombre[4][5]}" alt="" id='imgData1'>
                <img onclick='newRequest()' src="${nombre[4][6]}" alt="">
                <img onclick='newRequest()' src="${nombre[4][7]}" alt="">
            </div>
    `;

  results.innerHTML = userContent;
}