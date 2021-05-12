import { ColorKeyGenerator } from "../util/color";

export enum ArrayInputs {
  type = "type",
  size = "size",
}
export enum ObjectInputs {
  text = "text",
  spacing = "spacing",
  radius = "radius",
}

export type KeyGenerator<T extends string[], valueType extends any> = {
  [key in T[number]]: valueType;
};

export type Config<Variants extends string[], Sizes extends string[]> = {
  color: KeyGenerator<Variants & 'string', string>;
  button: {
    variant: Variants;
    size: Sizes;
    fontFamily: string;
    fontWeight: number;
    iconSpacing: KeyGenerator<Sizes, number>;
    fontSize: KeyGenerator<Sizes, number>;
    spacing: {
      vertical: KeyGenerator<Sizes, number>;
      horizontal: KeyGenerator<Sizes, number>;
    };
    radius: KeyGenerator<Sizes, number>;
    background: KeyGenerator<Variants, string>;
    text: KeyGenerator<Variants, string>;
    border: KeyGenerator<Variants, string>;
  };
};

export type NoCodeTheme<Variants extends string[], Sizes extends string[]> = Config<
  Variants,
  Sizes
> & {
  color: KeyGenerator<Variants, string> & ColorKeyGenerator<Variants>;
};