export default class FejlecView {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmlOsszerak();
  }
  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<th>${key}</th>`;
    }
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
