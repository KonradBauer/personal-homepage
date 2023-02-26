import axios from "axios";

const sourceURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios
    .get(`${sourceURL}/users/${username}/repos`)
    .then((response) => response.data);
