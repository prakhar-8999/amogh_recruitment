import axios from "axios";

const client = axios.create({
  baseURL: "https://6dd72743d93f51555d0a24bea844d3e8.serveo.net/api/user",
});

export default client;
