import axios from "axios";

const client = axios.create({
  baseURL: "https://c940-125-21-249-98.ngrok-free.app/api/user",
  timeout: 1000,
  headers: {"X-Custom-Header": "foobar"},
});

export default client;
