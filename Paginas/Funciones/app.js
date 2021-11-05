//*Importacion de archivos
// Language: javascript

import {newRequest} from "../../main.js"

//*Declaracion de variables
let title = document.querySelector('h1')


function nuevasData() {
    title.addEventListener('click', () => {
        title.innerHTML = 'Hola mundo'
    })
}
