import React from "react";
import { Sizes, useTheme, Variants } from "styled-components";
import * as Icon from "react-feather";

import {
  Button as StyledButton,
  ButtonProps as ButtonProperties,
} from "../../src/components/Button";

export type ButtonProps = {
  variant: Variants[number];
  size: Sizes[number];
  onClick: ButtonProperties['onClick'];
  children: ButtonProperties['children']
}


export const Button = (props: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (<>
    {
      theme.button.size.map((size) => (
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
      ))
    }
  </>);
};
