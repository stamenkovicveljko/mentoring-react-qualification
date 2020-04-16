import { configure } from "@storybook/react";
const req = require.context("../src", true, /\.stories\.mdx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);