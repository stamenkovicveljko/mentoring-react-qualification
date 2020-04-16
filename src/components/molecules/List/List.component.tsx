import React from "react";
import * as Styled from "./List.styles";

interface Props {
  items: Array<React.ReactNode>;
}

function List(props: Props) {
  const { items = [] } = props;
  return (
    <Styled.Ul>
      {items.map((item, ind) => (
        <li key={ind}>{item}</li>
      ))}
    </Styled.Ul>
  );
}

export default List;
