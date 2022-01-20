// Declaracion de Variables

const icon = document.getElementById("icon");
const main = document.getElementById("search");

// Contador de Click

let index;

function contableIndex(e) {
  let contable;
  if ( e.target.className === 'one' ) {
    contable = 1;
  }
  if ( e.target.className === 'second' ) {
    contable = 2;
  }
  if ( e.target.className === 'third' ) {
    contable = 3;
  }
  return contable;
}


function newRequest(e) {
    index = contableIndex(e);
    const  dadElement = document.getElementById("resultado");
    dadElement.innerHTML = `<request-result index="${index}"></request-result>`;
 }


icon.addEventListener("click", () => {
  changeLight();
});

//*Funcion para cambiar el color de fondo

function changeLight() {
  // Call Body
  const body = document.getElementById("per");
  // If  the class than contents body is bady
  if ( body.classList.contains("bady")) {
    body.classList.replace("bady", "light");
    // Change the icon
    changeIcon();
    // Change main
    changeMainSearch();
  } else {
    reverIcon();
    body.classList.replace("light", "bady");
    body.classList.add("efect");
    reverseMainSearch();
    
  }
}

// Function the icon

const changeIcon = () => {
  icon.classList.replace("bi-cloud-sun", "bi-cloud-sun-fill");
  icon.style.color = "black";
}

const reverIcon = () => {
    icon.classList.replace("bi-cloud-sun-fill", "bi-cloud-sun");
    icon.classList.add("full");
    icon.style.color = "white";
}

// Function the main

function changeMainSearch() {
  main.style.background = "#190474ed";
}

function reverseMainSearch() {
  main.style.background = "rgba( 255, 255, 255, 0.25 )";
}