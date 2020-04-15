import React, { ReactElement } from "react";
import * as Styled from "./ProfileInfo.styles";
import IGithubUser from "../../../models/GithubUser";
import Link from "../../atoms/Link/Link.component";

interface Props {
  user: IGithubUser;
  className?: string;
}

export default function ProfileInfo({ user, className }: Props): ReactElement {
  return (
    <Styled.Container className={className}>
      <img src={user.avatar_url} alt="Profile img" />
      <div>
        <div>
          <span>Username</span>
          <span className="user-data">{user.login}</span>
        </div>
        <div>
          <span>Name</span>
          <span className="user-data">{user.name}</span>
        </div>
        <div>
          <span>Github Profile:</span>
          <span className="user-data">
            <Link to={user.html_url} />
          </span>
        </div>
      </div>
    </Styled.Container>
  );
}
