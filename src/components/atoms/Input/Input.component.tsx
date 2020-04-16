import React, { useState } from "react";
import * as Styled from "./Input.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

const Input = (props: Props) => {
  const { value = "", onChange = () => {}, placeholder, ...rest } = props;
  const [stateValue, setStateValue] = useState("");

  return (
    <Styled.Container>
      <input
        {...rest}
        value={value || stateValue}
        onChange={(ev) => {
          onChange(ev);
          setStateValue(ev.target.value);
        }}
        placeholder={placeholder}
      />
    </Styled.Container>
  );
};

export default Input;
