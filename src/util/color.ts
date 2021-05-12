import { Variants, DefaultTheme } from "styled-components";
import Values from "values.js";
// https://noeldelgado.github.io/shadowlord/#6e6cc4

import { KeyGenerator } from "./types";

export enum ColorShades {
  A = 100,
  B = 200,
  C = 300,
  D = 400,
  E = 500,
  F = 600,
  G = 700,
  H = 800,
  I = 900,
}
export type ColorKeyGenerator<Colors extends string[]> = {
  [key in `${Colors[number]}.${ColorShades}`]: string;
};

export type ColorsWithName<Colors extends string[]> = {
  [key in Colors[number]]: string;
};


const shadeKeys = (Object.keys(ColorShades).filter((e) => {
  return parseInt(e, 10) >= 0;
}) as unknown) as ColorShades[];


export const generateColorVariants = (
  colors: ColorsWithName<Variants>,
): ColorKeyGenerator<Variants> & KeyGenerator<Variants, string> => {
  const generatedVariants = Object.entries(colors).reduce(
    (state, [colorKeyName, value]) => {
      const colorValues = new Values(value);
      const tints = colorValues
        .tints()
        .map((t: { hexString: () => string; }) => t.hexString())
        .slice(0, 4)
        .reverse() as [string, string, string, string];

      const shades = colorValues
        .shades()
        .map((t: { hexString: () => string; }) => t.hexString())
        .slice(0, 4) as [string, string, string, string];

      const mainShade = colorValues.hexString() as string;

      const allShadesOfColor = [...tints, mainShade, ...shades];

      const colorTints = shadeKeys.reduce((state, shadeKey, index) => {
        return {
          ...state,
          [colorKeyName]: mainShade,
          [`${colorKeyName}.${shadeKey}`]: allShadesOfColor[index],
        };
      }, {} as ReturnType<typeof generateColorVariants>);

      return {
        ...state,
        ...colorTints,
      };
    },
    {} as ReturnType<typeof generateColorVariants>
  );

  return generatedVariants;
};

export const parseColor = (theme: DefaultTheme, value: string): string => {
  const re = value.includes('.');
  if (re) {
    return theme.color[value as keyof typeof theme['color']];
  }
  return value;
}