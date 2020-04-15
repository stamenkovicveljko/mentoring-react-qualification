import React, { ReactElement } from "react";
import { StyledButton } from "./Button.styles";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: (ev: React.ChangeEvent<HTMLButtonElement>) => void;
  variant?: "standard" | "primary" | "secondary";
  children?: React.ReactNode;
}

export default function Button({
  type = "button",
  variant = "standard",
  onClick = () => {},
  children,
}: Props): ReactElement {
  return (
    <StyledButton<any> onClick={onClick} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
}
