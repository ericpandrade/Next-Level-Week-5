import Axios from "axios";

export const api = Axios.create({
  baseURL:
    "https://my-json-server.typicode.com/ericpandrade/Next-Level-Week-5" ||
    "http://localhost:3333/",
});
