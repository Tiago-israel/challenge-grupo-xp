import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1/"
});

instance.defaults.headers.common["Authorization"] =
  "Bearer BQCMuET0UD9cl3R1Wvkd3E5_EVnCMy3cGOppdfnzeGTqLUhsx4kvBLS1liZgY9brmcyzsKCbGdLfDuuS8ixuUxOUCpKH-Ddrh2GpFXCdtLBWMb49oc7zBzO86axkY8xwoA01e1eojIp9GAs";

export default instance;
