import React from "react";
import { RawView } from ".";
import { Decorator } from "../../storybook";

export default {
  title: "Components/RawView",
  decorators: [Decorator],
  component: RawView,
};

export const Primary = (args: Parameters<typeof RawView>[0]) => (
  <>
    <RawView {...args}></RawView>
  </>
);
Primary.parameters = {
  viewMode: "docs",
};
