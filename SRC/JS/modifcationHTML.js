import { setTemplate } from "./localStorage.js";
import { result } from "./main.js";

export async function showUserData(data) {
  let userContent = `
      <section class="container">
        <div class="image" style="background-image: url(${data.imgData[0]});">
           <div id="info">
               <p id="headline">${data.results[0].original_title}</p>
            </div>
        </div>

                <div class="data">
                    <h1>${data.results[0].original_title}</h1>
                    <p>${data.results[0].overview}</p>
                    <ul>
                        <p>Fecha de Lanzamiento</p>
                        <p>Reaiting</p>
                        <li>${data.results[0].release_date}</li>
                        <li>${data.results[0].popularity}</li>
                    </ul>
                
                
                
                </div>
                
      </section>
                <h2>Otros resultados</h2>
            
                <div id="father" class="otrosResultados">
                
                  <div>
                    <h3 class="one">${data.results[1].title}</h3>
                    <img src="${data.imgData[1]}" alt="">
                  </div>
                  <div>
                    <h3 class="second">${data.results[2].title}</h3>
                    <img src="${data.imgData[2]}" alt="">
                  </div>
                  <div>
                    <h3 class="third">${data.results[3].title}</h3>
                    <img src="${data.imgData[3]}" alt="">
                  </div>
                </div>
    `;
  result.innerHTML = userContent;

  // Guardar datos en local
  await setTemplate(userContent);
}
