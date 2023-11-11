export const adatLeiro={
    nev:"Név",
    szul:"Születési idő"
}

//TablaView-ba beimprotáljuk az adatLeiro-t 
// import import {adatLeiro} from "../View/adatLeiro.js";
//majd a Tablaviewben a new fejlecview első megadott adata az adatLeiro
//pl.: new FejlecView(adatLeiro,this.theadElem)
//majd. a fejlecView-ba a for ciklusnál txt += `<th>${key}</th>`; helyett txt += `<th>${this.#obj[key]}</th>`;