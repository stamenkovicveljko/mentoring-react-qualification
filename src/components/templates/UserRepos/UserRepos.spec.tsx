import React from "react";
import renderer from "react-test-renderer";
import UserRepos from "./UserRepos.component";
import { mount, ReactWrapper } from "enzyme";

let wrapper: ReactWrapper;

describe("UserRepos", () => {
  it("renders as expected", () => {
    const component = renderer.create(
      <UserRepos
        user={{
          name: "Some user",
          login: "storiez",
          avatar_url:
            "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
          html_url:
            "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
        }}
        repos={[
          {
            name: "some repo 1",
            html_url: "https://google.com",
          },
          {
            name: "some repo 2",
            html_url: "https://google.com",
          },
          {
            name: "some repo 3",
            html_url: "https://google.com",
          },
        ]}
      />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("given that repos are provided", () => {
    it("filters repoes based on user input", () => {
      wrapper = mount(
        <UserRepos
          user={{
            name: "Some user",
            login: "storiez",
            avatar_url:
              "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
            html_url:
              "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
          }}
          repos={[
            {
              name: "some repo 1",
              html_url: "https://google.com",
            },
            {
              name: "some repo 2",
              html_url: "https://google.com",
            },
            {
              name: "some repo 3",
              html_url: "https://google.com",
            },
          ]}
        />
      );

      wrapper.find("input").simulate("change", {
        target: {
          value: "2",
        },
      });

      expect(wrapper.find("li").length).toBe(1);
    });
  });
});
