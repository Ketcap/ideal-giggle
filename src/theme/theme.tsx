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

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#the_input_pseudo-classes
export type InputStates = [
  "Default",
  "Hover",
  "Active",
  "Focused",
  "Filled",
  "Disabled",
  "Error",
  "Success",
  "ReadOnly"
];

export type KeyGenerator<T extends string[], valueType> = {
  [key in T[number]]: valueType;
};

export type KeyGeneratorWithOptional<
  T extends string[],
  valueType,
  optionals extends Array<T[number]>
> = {
  [key in Exclude<T[number], optionals[number]>]: valueType;
} &
  {
    [key in optionals[number]]?: valueType;
  };

// color -> color paletter for generated ones
// color -> all colors withing the app (can be used in color selector as well)
export type Config<Variants extends string[], Sizes extends string[]> = {
  color: KeyGenerator<Variants & 'string', string>;
  button: {
    variant: Variants;
    size: Sizes;
    fontFamily: string;
    fontWeight: number;
    fontSize: KeyGenerator<Sizes, number>;
    iconSpacing: KeyGenerator<Sizes, number>;
    spacing: {
      vertical: KeyGenerator<Sizes, number>;
      horizontal: KeyGenerator<Sizes, number>;
    };
    radius: KeyGenerator<Sizes, number>;
    background: KeyGenerator<Variants, string>;
    text: KeyGenerator<Variants, string>;
    border: KeyGenerator<Variants, string>;
  };

  input: {
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    minWidth?: number;
    iconSpacing: number;
    spacing: {
      vertical: KeyGenerator<Sizes, number>;
      horizontal: KeyGenerator<Sizes, number>;
    };
    radius?: KeyGenerator<Sizes, number>;
    /**
     * Default color or with other states
     */
    background?:
      | string
      | KeyGeneratorWithOptional<
          InputStates,
          string,
          [
            "Hover",
            "Active",
            "Focused",
            "Filled",
            "Disabled",
            "Error",
            "Success",
            "ReadOnly"
          ]
        >;
    border: KeyGeneratorWithOptional<
      InputStates,
      string,
      ["Hover", "Filled"]
    > & {
      size: number;
    };
  };
};

export type NoCodeTheme<
  Variants extends string[],
  Sizes extends string[]
> = Config<Variants, Sizes> & {
  color: KeyGenerator<Variants, string> & ColorKeyGenerator<Variants>;
};
