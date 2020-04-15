import styled, { css } from "styled-components";
import { resetButton } from "../../../styles/resets";
import { fontSize } from "../../../styles";

export const StyledButton = styled.button`
  ${resetButton}
  ${fontSize("16px", "20px")}
  cursor: pointer;
  padding: 10px;
  border: solid 1px #212121;
  border-radius: 4px;

  ${({ variant }: any) => {
    const standard = css`
      color: #212121;
      background-color: white;
      border-radius: 4px;
      background-color: #fafafa;
      &:active {
        background-color: #eaeaea;
      }
    `;

    switch (variant) {
      case "primary":
        return css`
          background-color: #0366d6;
          border-color: #0366d6;
          color: white;
        `;

      case "secondary":
        return css`
          padding: 0;
          border: none;
          color: #0366d6;
          &:hover {
            text-decoration: underline;
          }
        `;

      default:
        return standard;
    }
  }}
`;
