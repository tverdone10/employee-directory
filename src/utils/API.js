import axios from "axios";

let apiURL = "https://randomuser.me/api/?results=25";

export default {
  search: function() {
    return axios.get(apiURL);
  }
};
