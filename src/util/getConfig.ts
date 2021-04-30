import { DefaultTheme } from "../theme/theme";

type ElementKeys = keyof DefaultTheme;

interface GetConfig {
  <
    Theme extends DefaultTheme,
    T extends ElementKeys,
    V extends keyof DefaultTheme[T]
  >(
    theme: Theme,
    elementKey: T,
    configKey: V
  ): DefaultTheme[T][V];

  <
    Theme extends DefaultTheme,
    T extends ElementKeys,
    V extends keyof DefaultTheme[T],
    U extends keyof DefaultTheme[T][V]
  >(
    theme: Theme,
    elementKey: T,
    configKey: V,
    valueKey?: U
  ): DefaultTheme[T][V][U];

  <
    Theme extends DefaultTheme,
    T extends ElementKeys,
    V extends keyof DefaultTheme[T],
    U extends keyof DefaultTheme[T][V],
    G extends keyof DefaultTheme[T][V][U]
  >(
    theme: Theme,
    elementKey: T,
    configKey: V,
    valueKey?: U
  ): DefaultTheme[T][V][U][G];
}

export const getConfig: GetConfig = <
  Theme extends DefaultTheme,
  T extends ElementKeys,
  V extends keyof DefaultTheme[T],
  U extends keyof DefaultTheme[T][V],
  G extends keyof DefaultTheme[T][V][U]
>(
  theme: Theme,
  elementKey: T,
  configKey: V,
  valueKey?: U,
  extraKey?: G
): DefaultTheme[T][V] | DefaultTheme[T][V][U] | DefaultTheme[T][V][U][G] => {
  const element = theme[elementKey];
  const config = element[configKey];
  if (valueKey && extraKey) {
    return config[valueKey][extraKey];
  }
  if (valueKey) {
    return config[valueKey];
  }
  return config;
};
