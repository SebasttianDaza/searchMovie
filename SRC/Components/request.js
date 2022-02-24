
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

    filterAutomatic(img, datas, indexs, value) {
      const dataFilter = [], imgFilter = [];

      for (let i = indexs; i <= value; i++) {
        dataFilter.push(datas[i]);
        imgFilter.push(img[i]);
      }

      return [dataFilter, imgFilter];
    }

    paintDate(datafilter, imgfilter) {
      this.shadowRoot.querySelector("#mg").src = imgfilter[0];
      this.shadowRoot.querySelector(".imagineH").innerHTML = datafilter[0].original_title;
      this.shadowRoot.querySelector(".dato h1").innerHTML =
        datafilter[0].original_title;
      this.shadowRoot.querySelector(".dato p").innerHTML = (datafilter[0].overview).slice(0, 200);
      this.shadowRoot.querySelector(".dato .fech").innerHTML = datafilter[0].release_date;
      this.shadowRoot.querySelector(".dato .raiting").innerHTML = datafilter[0].vote_average;
      this.shadowRoot.querySelector(".modific1 img").src = imgfilter[1];
      this.shadowRoot.querySelector(".modific1 h3").innerHTML = datafilter[1].original_title;

      this.shadowRoot.querySelector(".modific2 img").src = imgfilter[2];
      this.shadowRoot.querySelector(".modific2 h3").innerHTML = datafilter[2].original_title;

      this.shadowRoot.querySelector(".modific3 img").src = imgfilter[3];
      this.shadowRoot.querySelector(".modific3 h3").innerHTML =datafilter[3].original_title;

    }

    changeIndex (indexs, data) {
      let datas = data[0];
      let img = data[1];
      // Variables globales

      if (indexs > 0 && indexs < 2) {
        // Function to filter information
        const [datafilter, imgfilter] = this.filterAutomatic(img, datas, indexs, 4);
        this.paintDate(datafilter, imgfilter);
      }
      if (indexs > 1 && indexs < 3) {
        const [datafilter, imgfilter] = this.filterAutomatic(
          img,
          datas,
          indexs,
          5
        );
        this.paintDate(datafilter, imgfilter);
      }
      if (indexs > 2 && indexs < 4) {
        const [datafilter, imgfilter] = this.filterAutomatic(
          img,
          datas,
          indexs,
          6
        );
        this.paintDate(datafilter, imgfilter);
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



