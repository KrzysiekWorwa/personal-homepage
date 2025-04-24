import axios from "axios";

const githubAPIBaseUrl = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${githubAPIBaseUrl}/users/${username}/repos`)
.then(response => response.data);