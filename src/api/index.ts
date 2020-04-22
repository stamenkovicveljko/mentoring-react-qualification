import github from "./github";

export function handleErrors(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const reqOptions = {
  headers: {
    Accept: "application/json",
  },
};

export default {
  github,
};
