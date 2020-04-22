import endpoints from "../endpoints";
import { reqOptions, handleErrors } from "..";

function getUser(username: string) {
  return fetch(endpoints.githubUserEndpoint(username), reqOptions)
    .then(handleErrors)
    .then((res) => res.json());
}

function getRepos(username: string) {
  return fetch(endpoints.githubRepoEndpoint(username), reqOptions)
    .then(handleErrors)
    .then((res) => res.json());
}

export default {
  getUser,
  getRepos,
};
