import SorView from "../View/SorView.js";
import FejlecView from "../View/FejlecView.js";

export default class TablaView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    szuloElem.append(
      "<table class='table table-striped'><thead></thead><tbody></tbody></table>"
    );
    this.tbodyElem = szuloElem.find("tbody");
    this.theadElem = szuloElem.find("thead");
    new FejlecView(this.#list[0],this.theadElem)

    this.sorMegjelenit();
  }

  sorMegjelenit() {
    // Itt fogjuk példányosítani a sort annyiszor ahány elem van a listában
    this.#list.forEach((elem, index) => {
      new SorView(index, elem, this.tbodyElem);
    });
  }
}
