// Declaracion de Variables

const icon = document.getElementById("icon");

//*Funcion de los demas resultados

function newRequest() {
    location.href = "../../Pages/request.html";
    
}



icon.addEventListener("click", () => {
  changeLight();
});

//*Funcion para cambiar el color de fondo

function changeLight() {
  const body = document.getElementById("per");
  if ( body.classList.contains("bady")) {
    body.classList.replace("bady", "light");
  } else {
    body.classList.replace("light", "bady");
    body.classList.add("efect");
    
  }
}
