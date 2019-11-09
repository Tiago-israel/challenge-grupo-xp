import axios from "./instance";

export default class HttpClient {
  constructor(resource = "") {
    this.resource = resource;
  }

  get = (action = "", token) => {
    return axios.get(`${this.resource}${action}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };
}
