
//Creacion de un web componet

class RequestResult extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      // Create template
        const temaplate = document.getElementById("firstComponet");
      // Create clone template 
        const clone = document.importNode(temaplate.content, true);
      // Add Shadow of template
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(clone);

  
    }
}


window.customElements.define('request-result', RequestResult);
