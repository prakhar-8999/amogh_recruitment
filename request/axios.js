import axios from "axios";

const client = axios.create({
  baseURL: "https://e125d7ca9dd3fe2062cf5b0c01792ad5.serveo.net/api/user",
});

export default client;
