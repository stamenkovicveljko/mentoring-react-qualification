import styled from "styled-components";
import { fontSize } from "../../../styles";
import { resetInput } from "../../../styles/resets";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  > input {
    ${resetInput}
    box-sizing: border-box;
    ${fontSize("16px", "20px")}
    width: 100%;
    border-radius: 6px;
    padding: 10px;
  }
`;
