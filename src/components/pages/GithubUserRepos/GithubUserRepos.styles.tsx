import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 24px;
`;

export const UserSearch = styled.div`
  display: flex;
  margin-bottom: 16px;

  > div {
    flex: 1 1 100%;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  button {
    flex: 0 0 auto;
    margin-left: 16px;
    align-self: flex-end;
  }
`;
