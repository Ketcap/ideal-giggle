import { DefaultTheme, Sizes, Variants } from "styled-components";

import { generateColorVariants } from "../util/color";
import { Config } from "..";

export function generateTheme<
  T extends Config<Variants, Sizes>
>(
  theme: T
): DefaultTheme {
  const color = generateColorVariants(theme.color);
  return {
    ...theme,
    color
  }
}