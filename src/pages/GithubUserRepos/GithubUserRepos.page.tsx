import React, { ReactElement, useState } from "react";
import IGithubRepo from "../../models/GithubRepo";
import IGithubUser from "../../models/GithubUser";
import UserRepos from "../../components/templates/UserRepos/UserRepos.component";
import ErrorTemplate from "../../components/templates/Error/Error.component";
import * as Styled from "./GithubUserRepos.styles";
import Input from "../../components/atoms/Input/Input.component";
import Button from "../../components/atoms/Button/Button.component";
import api from "../../api";

export default function GithubUserRepos(): ReactElement {
  const [repos, setRepos] = useState<IGithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userTerm, setUserTerm] = useState<string>("stamenkovicveljko");
  const [selectedUsername, setSelectedUsername] = useState<string>(userTerm);
  const [error, setError] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<IGithubUser | null>();

  React.useEffect(() => {
    const getRepos = async () => {
      setError(false);
      try {
        setLoading(true);
        const [user, repositories] = await Promise.all<
          IGithubUser,
          IGithubRepo[]
        >([
          api.github.getUser(selectedUsername),
          api.github.getRepos(selectedUsername),
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
