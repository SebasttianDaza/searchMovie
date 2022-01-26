
//Creacion de un web componet

class RequestResult extends HTMLElement {
    constructor() {
        super();
        this.index = index;
    }

    static get observedAttributes() {
      return ["index"];
    }

    // Actualizar el valor de un atributo
    attributeChangedCallback(name, oldValue, newValue) {
      this.index = newValue;
    }

    // Funcion para obtener la data de localStorage y cargar en el template
    getLocal(index) {
      if (localStorage.getItem("data")) {
        //Obtener data de localStorage
        let nombre = JSON.parse(localStorage.getItem("data"));
        const p = nombre.filter(element => element.length > 10);
        this.changeIndex(index, p);
      } else {
        console.warn("No hay datos, intente nuevamente");
      }
    }

    // Funcion para obtener la data de la API y cargar en el template anterior
    backPage () {
      let template = JSON.parse(localStorage.getItem("template"));
      document.getElementById("resultado").innerHTML = template;
    }

    
    changeIndex (indexs, data) {
      let datas = data[0];
      let img = data[1];
      // Variables globales
      const dat = [],
        imgs = [];

      if (indexs > 0 && indexs < 2) {
        // Function to filter information
        for (let i = indexs; i <= 4; i++) {
          dat.push(datas[i]);
          imgs.push(img[i]);
        }
        console.log(dat);
        this.shadowRoot.querySelector("#mg").src = imgs[0];
        this.shadowRoot.querySelector(".dato h1").innerHTML =
          dat[0].original_title;

      }
      if (indexs > 1 && indexs < 3) {
        for (let i = indexs; i <= 5; i++) {
          dat.push(datas[i]);
          imgs.push(img[i]);
        }
        console.log(dat);
        this.shadowRoot.querySelector("#mg").src = imgs[0];
        this.shadowRoot.querySelector(".dato h1").innerHTML =
          dat[0].original_title;
      }
      if (indexs > 2 && indexs < 4) {
        for (let i = indexs; i <= 6; i++) {
          dat.push(datas[i]);
          imgs.push(img[i]);
        }
        console.log(dat);
        this.shadowRoot.querySelector("#mg").src = imgs[0];
        this.shadowRoot.querySelector(".dato h1").innerHTML =
          dat[0].original_title;
      }
    
        

  
    }

    connectedCallback() {
      // Create template
        const template = document.getElementById("firstComponet");
      // Create clone template 
        const clone = document.importNode(template.content, true);
      // Add Shadow of template
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(clone);
      this.button = this.shadowRoot.querySelector(".text1");
      this.button.addEventListener("click", this.backPage );
      this.getLocal(this.index);
  
    }

    disconnectedCallback() {
      this.button.removeEventListener("click", this.backPage);
    }

}


window.customElements.define('request-result', RequestResult);



