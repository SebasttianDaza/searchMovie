
//Creacion de un web componet

class RequestResult extends HTMLElement {
    constructor() {
        super();
    }

    getLocal() {
      if (localStorage.getItem("data")) {
        //Obtener data de localStorage
        nombre = JSON.parse(localStorage.getItem("data"));
        console.log(nombre);
        showLocal(nombre);
      } else {
        console.warn("No hay datos, intente nuevamente");
      }
    }

    backPage() {
      let nombre = JSON.parse(sessionStorage.getItem("back"));
      document.getElementById("resultado").innerHTML = nombre;
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

  
    }

}


window.customElements.define('request-result', RequestResult);



