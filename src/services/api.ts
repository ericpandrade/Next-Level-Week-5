import Axios from "axios";

export const api = Axios.create({
  baseURL: null || "http://localhost:3333/",
});
