import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1/"
});

instance.defaults.headers.common["Authorization"] =
  "Bearer BQBgKOZ8GZosMGtKHF-J0DkH55Bfe0JPl8Z3ng_iuFsjCqlA63-VKvYFugrBWWshMCEBsM_wvx3vrq56r3kwCVv5XaleDu-h9Efmh4Mh-fo2C1JHiTgZkiaUh98CJLcpxoWazsh0UR5_jdc";

export default instance;
