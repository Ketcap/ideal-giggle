import React from "react";
import { ThemeProvider } from "styled-components";
import * as Icon from "react-feather";

import {
  Button as StyledButton,
  ButtonProps as ButtonProperties,
} from "../src/components/Button";
import { theme } from "../src/theme/theme";

export type ButtonProps = Pick<
  ButtonProperties,
  "children" | "variant" | "onClick"
>;

export const Button = (props: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      {theme.button.size.map((size) => (
        <div
          style={{
            display: "flex",
            gridGap: 8,
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <StyledButton
            onClick={props.onClick}
            variant={props.variant}
            size={size}
          >
            {props.children}
          </StyledButton>
          <StyledButton
            onClick={props.onClick}
            variant={props.variant}
            size={size}
            iconLeft={<Icon.ArrowDownLeft />}
          >
            {props.children}
          </StyledButton>
          <StyledButton
            onClick={props.onClick}
            variant={props.variant}
            size={size}
            iconRight={<Icon.ArrowDownRight />}
          >
            {props.children}
          </StyledButton>
          <StyledButton
            onClick={props.onClick}
            variant={props.variant}
            size={size}
            iconLeft={<Icon.ArrowDownLeft />}
            iconRight={<Icon.ArrowDownRight />}
          >
            {props.children}
          </StyledButton>
        </div>
      ))}
    </ThemeProvider>
  );
};
