import { Axios } from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
