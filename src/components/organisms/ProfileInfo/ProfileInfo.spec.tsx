import React from "react";
import renderer from "react-test-renderer";
import ProfileInfo from "./ProfileInfo.component";

test("ProfileInfo renders as expected", () => {
  const component = renderer.create(
    <ProfileInfo
      user={{
        name: "Some user",
        login: "storiez",
        avatar_url:
          "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
        html_url:
          "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
      }}
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
