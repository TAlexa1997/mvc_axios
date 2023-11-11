import DataService from "../Modell/DataService.js";
import TablaView from "../View/TablaView.js";

export default class Controller{
    constructor(){
        this.dataService=new DataService();

        this.dataService.getData("adatok.json",this.megjelenit)
    }

    megjelenit(list){
        console.log(list);
        //példányosítjuk a view-t a Táblázatot
        new TablaView(list,$(".adatok"));
    }
}

