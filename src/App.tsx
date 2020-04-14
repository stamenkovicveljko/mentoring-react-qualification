import React, { useEffect, useState } from "react";

const githubRepoEndpoint =
  "https://api.github.com/users/stamenkovicveljko/repos";

interface IGithubRepo {
  name: string;
  html_url: string;
}

function App() {
  const [repos, setRepos] = useState<IGithubRepo[]>([]);
  const [term, setTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getRepos = async () => {
      const reqOptions = {
        headers: {
          Accept: "application/json",
        },
      };

      try {
        setLoading(true);
        const res = await (await fetch(githubRepoEndpoint, reqOptions)).json();
        setRepos(res);
      } catch (er) {
        console.error(er);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  const handleTermOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
  };

  return (
    <div>
      <input
        value={term}
        placeholder="Search repos"
        onChange={handleTermOnChange}
      />
      {loading ? (
        <p>loading repositories..</p>
      ) : (
        <ul>
          {repos
            .filter(({ name }) =>
              name.toLowerCase().includes(term.toLowerCase())
            )
            .map((repo) => (
              <li key={repo.name}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default App;
