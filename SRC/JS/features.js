// Declaracion de Variables

const main = document.getElementById("search");

// Contador de Click

let index;

function contableIndex(e) {
  let contable;
  if ( e === 'one' ) {
    contable = 1;
  }
  if ( e === 'second' ) {
    contable = 2;
  }
  if ( e === 'third' ) {
    contable = 3;
  }
  return contable;
}


function newRequest(e) {
    index = contableIndex(e.target.className);
    const  dadElement = document.getElementById("resultado");
    dadElement.innerHTML = `<request-result index="${index}"></request-result>`;
 }


