import axios from "axios";

const githubAPIBaseURL = "https://api.github.com/";

export const getProjects = (username) =>
  axios
    .get(`${githubAPIBaseURL}users/${username}/repos`)
    .then((response) => console.log(response.data));
