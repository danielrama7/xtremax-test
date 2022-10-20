import axios from "axios";

const baseURL = "https://danielrama7.github.io/";

const Api = axios.create({
  baseURL: baseURL,
});

export default Api;
