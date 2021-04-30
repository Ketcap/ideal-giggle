import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: "Hello World",
  variant: "primary",
} as ButtonProps;
