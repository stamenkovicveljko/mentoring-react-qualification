import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link.component";

test("Link renders as expected", () => {
  const component = renderer.create(
    <Link to="https://google.com">sample link</Link>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
