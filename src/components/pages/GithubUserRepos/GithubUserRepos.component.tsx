import React, { ReactElement, useState, useEffect } from "react";
import IGithubRepo from "../../../models/GithubRepo";
import IGithubUser from "../../../models/GithubUser";
import endpoints from "../../../api/endpoints";
import UserRepos from "../../templates/UserRepos/UserRepos.component";
import ErrorTemplate from "../../templates/Error/Error.component";
import * as Styled from "./GithubUserRepos.styles";
import Input from "../../atoms/Input/Input.component";
import Button from "../../atoms/Button/Button.component";

function handleErrors(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function GithubUserRepos(): ReactElement {
  const [repos, setRepos] = useState<IGithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userTerm, setUserTerm] = useState<string>("stamenkovicveljko");
  const [selectedUsername, setSelectedUsername] = useState<string>(userTerm);
  const [error, setError] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<IGithubUser | null>();

  useEffect(() => {
    const getRepos = async () => {
      setError(false);
      const reqOptions = {
        headers: {
          Accept: "application/json",
        },
      };

      try {
        setLoading(true);
        const [user, repositories] = await Promise.all<
          IGithubUser,
          IGithubRepo[]
        >([
          (
            await fetch(
              endpoints.githubUserEndpoint(selectedUsername),
              reqOptions
            ).then(handleErrors)
          ).json(),
          (
            await fetch(
              endpoints.githubRepoEndpoint(selectedUsername),
              reqOptions
            ).then(handleErrors)
          ).json(),
        ]);

        setCurrentUser(user);
        setRepos(repositories);
      } catch (er) {
        setCurrentUser(null);
        setRepos([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, [selectedUsername]);

  return (
    <Styled.Container>
      {error ? (
        <ErrorTemplate>
          <p>
            Click&nbsp;
            <Button
              onClick={() => {
                setUserTerm("stamenkovicveljko");
                setSelectedUsername("stamenkovicveljko");
              }}
              variant="secondary"
            >
              here
            </Button>
            &nbsp;to return to default profile.
          </p>
        </ErrorTemplate>
      ) : loading || !currentUser ? (
        <p>loading ...</p>
      ) : (
        <>
          <Styled.UserSearch>
            <div>
              <label htmlFor="user-search">Current user:</label>
              <Input
                id="user-search"
                value={userTerm}
                onChange={(ev) => setUserTerm(ev.target.value)}
                placeholder="Search repos"
              />
            </div>
            <Button
              variant="primary"
              onClick={() => setSelectedUsername(userTerm)}
            >
              Search user
            </Button>
          </Styled.UserSearch>
          <UserRepos repos={repos} user={currentUser} />
        </>
      )}
    </Styled.Container>
  );
}
