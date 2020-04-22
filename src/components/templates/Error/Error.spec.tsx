import React from "react";
import renderer from "react-test-renderer";
import Error from "./Error.component";

test("Error renders as expected", () => {
  const component = renderer.create(
    <Error title="There was an error." subtitle="401 - Unauthorized">
      Try logging in.
    </Error>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
