import styled from "styled-components";
import { resetUl } from "../../../styles/resets";

export const Ul = styled.ul`
  ${resetUl};
  font: inherit;

  > li {
    padding: 10px;
    &:not(:first-child) {
      border-top: 1px solid lightgray;
    }
  }
`;
