
import DataService from "../Modell/DataService.js";
import UrlapView from "../View/Urlap/UrlapView.js";


class UrlapController {
  constructor() {
    this.dataService=new DataService();
    this.dataService.getData("adatok.json",this.megjelenit)
  }

    megjelenit(list){
        console.log(list);
        //példányosítjuk a view-t az Ürlapot
        new UrlapView(list,$(".urlap"))
    }


  };


export default UrlapController;
