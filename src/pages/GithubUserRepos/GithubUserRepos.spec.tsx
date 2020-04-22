import React from "react";
import renderer from "react-test-renderer";
import GithubUserRepos from "./GithubUserRepos.page";
import { shallow, ShallowWrapper } from "enzyme";
import api from "../../api";
import UserRepos from "../../components/templates/UserRepos/UserRepos.component";

let useEffect: jest.SpyInstance<
  void,
  [React.EffectCallback, (React.DependencyList | undefined)?]
>;
let wrapper: ShallowWrapper;
let originalGetUser = api.github.getUser;
let originalGetRepos = api.github.getRepos;

useEffect = jest.spyOn(React, "useEffect");

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f: () => any) => f());
};

describe("GithubUserRepos page", () => {
  const user = {
    name: "Some user",
    login: "storiez",
    avatar_url:
      "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
    html_url: "https://velikirecnik.com/wp-content/uploads/2017/11/Avatar.jpeg",
  };

  const repos = [
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
  ];

  beforeAll(() => {
    api.github.getUser = jest.fn().mockResolvedValue(user);
    api.github.getRepos = jest.fn().mockResolvedValue(repos);
  });

  afterAll(() => {
    api.github.getUser = originalGetUser;
    api.github.getRepos = originalGetRepos;
  });

  beforeEach(() => {
    mockUseEffect();
    wrapper = shallow(<GithubUserRepos />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("GithubUserRepos renders as expected", () => {
    const component = renderer.create(<GithubUserRepos />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("on start", () => {
    it("loads user", () => {
      expect(api.github.getUser).toHaveBeenCalled();
    });

    it("loads repos", () => {
      expect(api.github.getRepos).toHaveBeenCalled();
    });
  });

  describe("on render", () => {
    it("renders user repoes", () => {
      expect(wrapper.find(UserRepos).length).toBe(1);
    });
  });
});
