import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1/"
});

instance.defaults.headers.common["Authorization"] =
  "Bearer BQBWGOZxNbeusnxhtOZyZK2LbEzZhSHsA23tHm7GoVyr1qj9sH8KPrLFLIato7nEsDeCCQfBKC2za9mhHhKLWsXtwg_FNcYVmmpgW47CAgtDDJvRgCRoXHHt2mGeUAJQ-faV-jNC4je1Ftg";

export default instance;
