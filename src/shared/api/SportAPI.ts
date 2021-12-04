import Axios from "axios";

const SportAPI = Axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/2/',
});

export default SportAPI;
