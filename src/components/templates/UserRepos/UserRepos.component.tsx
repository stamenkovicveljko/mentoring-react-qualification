import React, { useState } from "react";
import IGithubUser from "../../../models/GithubUser";
import IGithubRepo from "../../../models/GithubRepo";
import ProfileInfo from "../../organisms/ProfileInfo/ProfileInfo.component";
import Input from "../../atoms/Input/Input.component";
import List from "../../molecules/List/List.component";
import Link from "../../atoms/Link/Link.component";
import * as Styled from "./UserRepos.styles";

interface Props {
  user: IGithubUser;
  repos: IGithubRepo[];
}

const UserRepos = ({ user, repos }: Props) => {
  const [term, setTerm] = useState<string>("");

  const handleTermOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
  };

  return (
    <Styled.Container>
      <ProfileInfo user={user} className="profile-info" />
      <div>
        <Input
          value={term}
          onChange={handleTermOnChange}
          placeholder="Search repos"
        />
        <List
          items={repos
            .filter(({ name }) =>
              name.toLowerCase().includes(term.toLowerCase())
            )
            .map((repo) => (
              <Link to={repo.html_url}>{repo.name}</Link>
            ))}
        />
      </div>
    </Styled.Container>
  );
};
export default UserRepos;
