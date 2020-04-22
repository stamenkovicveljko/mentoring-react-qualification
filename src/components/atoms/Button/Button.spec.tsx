import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button.component";

test("Button renders as expected", () => {
  const component = renderer.create(
    <Button variant="primary">Sample button</Button>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
