import React from "react";
import * as Styled from "./Link.styles";

interface Props {
  to: string;
  children?: React.ReactNode;
}

const Link = ({ to, children }: Props) => (
  <Styled.Link href={to}>{children || to}</Styled.Link>
);

export default Link;
