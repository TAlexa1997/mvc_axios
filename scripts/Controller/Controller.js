import DataService from "../Modell/DataService.js";

export default class Controller{
    constructor(){
        this.dataService=new DataService();

        this.dataService.getData("adatok.json",this.megjelenit)
    }

    megjelenit(list){
        console.log(list);
    }
}

