import React from "react";
import * as Styled from "./Input.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

const Input = (props: Props) => {
  const { value = "", onChange, placeholder, ...rest } = props;

  return (
    <Styled.Container>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Styled.Container>
  );
};

export default Input;
