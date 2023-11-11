class DataService {
  constructor() {
    console.log("DataService");
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        console.log(response);
        console.log(response.data.Autóim);
        callback(response.data.Autóim);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postData() {}

  putData() {}

  deleteData() {}
}

export default DataService;
