import styled from "styled-components";
import { fontSize } from "../../../styles";

export const Container = styled.div`
  display: flex;

  > img {
    width: 240px;
    height: 240px;
    flex: 0 0 auto;
    border-radius: 50%;
  }

  > div {
    &,
    > div {
      display: flex;
      flex-direction: column;
    }

    justify-content: space-around;

    > div {
      flex: 1 1 100%;
      margin-left: 24px;
      justify-content: center;
      span {
        &:not(.user-data) {
          ${fontSize("14px")};
          color: gray;
        }

        &.user-data {
          ${fontSize("18px", '24px')};
          color: #212121;
        }
      }
    }
  }
`;
