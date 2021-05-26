// import original module declarations
import "styled-components";
import { Config, NoCodeTheme } from "../src/theme/theme";
// and extend them!
declare module "styled-components" {
  export type Variants = ["primary", "secondary", "tertiary", "danger"];
  export type Sizes = ["small", "medium", "large"];

  export type NoCodeConfig = Config<Variants, Sizes>;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends NoCodeTheme<Variants, Sizes> {}
}
