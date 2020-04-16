import * as React from 'react';
import { StyledButton } from "./Button.styles";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: (ev: React.ChangeEvent<HTMLButtonElement>) => void;
  variant?: "standard" | "primary" | "secondary";
  children?: React.ReactNode;
}

function Button({
  type = "button",
  variant = "standard",
  onClick = () => {},
  children,
}: Props): React.ReactElement {
  return (
    <StyledButton<any> onClick={onClick} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
