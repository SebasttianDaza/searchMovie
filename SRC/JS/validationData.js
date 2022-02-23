import { search } from "./main.js";
import { getUserData } from "./api.js";


export const validationApi = (e) => {
    e.preventDefault();
    if (search.value.length === 0) {
      console.log("No hay datos");
    } 
    else if (search.value.match(/^[0-9]+$/)) {
        console.log("No se permiten solo numeros");
    } else {
      const movie = search.value;
      getUserData(movie);
    }
}