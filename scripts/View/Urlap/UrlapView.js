import LabelView from "./LabelView.js";

export default class UrlapView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    szuloElem.append("<form class='urlap'><fieldset disabled><legend>Ürlap</legend></fieldset></form>");
    this.formElem = szuloElem.find("form");
    this.sorMegjelenit();
    szuloElem.append("<button>Küldés</button>");
  }

  sorMegjelenit() {
    const labelView = new LabelView(this.#list[0], this.formElem);
    
  }
}


