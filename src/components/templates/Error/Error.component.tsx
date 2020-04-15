import React, { ReactElement } from "react";
import * as Styled from "./Error.styles";

interface Props {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function ErrorTemplate({
  title = "Ooops, seems there is an error!",
  subtitle = "404 - Not Found",
  children,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </Styled.Container>
  );
}
