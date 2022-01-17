

// Function para obtener la data de la API
function getLocal() {
  if (localStorage.getItem("data")) {
    //Obtener data de localStorage
    nombre = JSON.parse(localStorage.getItem("data"));
    console.log(nombre);
    showLocal(nombre);
  } else {
    console.warn("No hay datos, intente nuevamente");
  }
}
