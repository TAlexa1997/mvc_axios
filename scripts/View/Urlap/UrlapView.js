import FejlecView from "../Tablazat/FejlecView";

export default class UrlapView{
    constructor(szuloElem,){
        this.szuloElem=szuloElem
        //letrehozok egy form taget
        //letrehozok egy kapaszkodót a formelemhez this.formElem
        this.htmlOsszerak()
    }

    htmlOsszerak(){
        let urlap="<form>";
    
        for (const key in this.list) {
            urlap +=`<td>${this.list[key]}</td>`
            }
            urlap+="</form>";
            this.szuloElem.append(txt)
        
    }
}