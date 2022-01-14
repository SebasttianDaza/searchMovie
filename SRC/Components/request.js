// Creacion de un web componet

class requestResult extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let templa = document.createElement('template');
        templa.innerHTML = `
            <div id='nuevo'>
                    <button class="text1"><span class="text2">Regersar</span></button>
            </div>
             <div class="image">
                    <img src="${data.imgData[0]}">
                    <h3 class='haver'>${data.results[0].title}</h3>
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
                
                <h2>Otros resultados</h2>
            
                <div class="otrosResultados">
                  <div>
                    <h3 onclick='newRequest(num = 1)'>${data.results[1].title}</h3>
                    <img src="${data.imgData[1]}" alt="">
                  </div>
                  <div>
                    <h3 onclick='newRequest(num = 2)'>${data.results[2].title}</h3>
                    <img src="${data.imgData[2]}" alt="">
                  </div>
                  <div>
                    <h3 onclick='newRequest(num = 3)'>${data.results[3].title}</h3>
                    <img src="${data.imgData[3]}" alt="">
                  </div>
                </div>

        `;

        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templa.content.cloneNode(true));
    }
}


window.customElements.define('request-result', requestResult);
