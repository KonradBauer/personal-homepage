import axios from "axios";

const sourceURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios.get(`${sourceURL}/users/$`).then((response) => response.data);
console.log(response.data);
