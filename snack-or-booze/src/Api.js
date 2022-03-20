import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`)
    return result.data
  }

  static async createSnack(data) {
    console.log(data);
    const result = await axios.post(`${BASE_API_URL}/snacks`, {id : data.itemName.toLowerCase() , name : data.itemName , description : data.description , recipe : data.recipe , serve : data.serve}
     )
     return result.data
  }

  static async createDrink(data) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, {id : data.itemName.toLowerCase() , name : data.itemName , description : data.description , recipe : data.recipe , serve : data.serve}
     )
     return result.data
  }

  // static async test() {
  //   const result =  await axios.post('http://localhost:5000/snacks',{id: 'pizza' , name: 'pizza' , description: 'cook' , recipe : 'cook', serve : 'give it to them'});
  //   return result;
  // }
}

export default SnackOrBoozeApi;
