import axios from "./instance";

export default class HttpClient {
  constructor(resource = "") {
    this.resource = resource;
  }

  get = (action = "") => {
    return axios.get(`${this.resource}${action}`);
  };
}
