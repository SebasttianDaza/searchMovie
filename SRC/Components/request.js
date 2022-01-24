
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

    
    changeIndex (index, data) {
      this.shadowRoot.querySelector("#mg").src = data[1][1];
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



