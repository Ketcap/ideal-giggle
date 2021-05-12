import React from "react";
import { Story, Meta } from "@storybook/react";

import { Color } from "./Color";

export default {
  title: "Color Palette",
  component: Color,
} as Meta;

const Template: Story = (args) => <Color />;

export const Main = Template.bind({});

Main.args = {
};
