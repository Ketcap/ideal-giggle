import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button as ButtonComponent, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: ButtonComponent,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;


export const Button: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

Button.args = {
  children: "Hello World",
  variant: "primary",
  size: 'medium'
} as ButtonProps;
