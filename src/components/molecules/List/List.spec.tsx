import React from "react";
import renderer from "react-test-renderer";
import List from "./List.component";

test("List renders as expected", () => {
  const component = renderer.create(
    <List items={["first item", "second item"]} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
