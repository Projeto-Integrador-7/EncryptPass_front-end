import axios from "axios";
import {parseCookies} from "nookies"

export function getAPIClient(ctx?: any) {
  const { "encryptpass.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://encryptpassapi.vercel.app/",
  });

  // api.interceptors.request.use(config => {
  //     console.log(config);

  //     return config;
  // })

  if (token) {
    api.defaults.headers["Autorization"] = `Bearer ${token}`;
  }
  return api;
}
