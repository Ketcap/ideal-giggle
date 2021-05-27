import React from "react";
import { Story, Meta } from "@storybook/react";

import { Color as ColorComponent } from "./Color";

export default {
  title: "System/Color Palette",
  component: ColorComponent,
} as Meta;


export const ColorPalette: Story = (args) => <ColorComponent />;

ColorPalette.args = {
};
