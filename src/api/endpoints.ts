const githubUserEndpoint = (user: string) =>
  `https://api.github.com/users/${user}`;

const githubRepoEndpoint = (user: string) =>
  `https://api.github.com/users/${user}/repos`;

export default {
  githubRepoEndpoint,
  githubUserEndpoint,
};
