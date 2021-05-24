import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input as InputComponent } from "./Input";

export default {
  title: "Example/Input",
  component: InputComponent,
} as Meta;


export const Input: Story = (args) => <InputComponent />;

Input.args = {};
