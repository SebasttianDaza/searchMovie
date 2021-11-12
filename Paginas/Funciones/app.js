//*Importacion de archivos
// Language: javascript
import {imagendata1} from '../../main.js'

//*Declaracion de variables


const btnVolver = document.getElementById('btnVolver');
const section = document.getElementById('resultado');


//*Declaracion de eventos
btnVolver.addEventListener('click', () => {
    location.href = '../index.html'
})

console.log(imagendata1)



