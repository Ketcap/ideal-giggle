import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { DefaultTheme } from "../theme/theme";
import { getConfig } from "../util/getConfig";
import {
  borderRadius,
  horizontalPadding,
  verticalPadding,
} from "../util/style";

type ThemeButton = DefaultTheme["button"];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ThemeButton["variant"][number];
  size: ThemeButton["size"][number];
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;

  fluid?: boolean;

  children: React.ReactNode;
}

const ignoredPropsToDom: Array<keyof ButtonProps> = [
  "fluid",
  "size",
  "variant",
  "iconLeft",
  "iconRight",
];

const IconWrapper = styled.span<{ size: ButtonProps["size"] }>`
  display: inline-flex;
  :first-child {
    margin-right: ${({ theme, size }) =>
      getConfig(theme, "button", "iconSpacing", size)}px;
  }
  :last-child {
    margin-left: ${({ theme, size }) =>
      getConfig(theme, "button", "iconSpacing", size)}px;
  }
  > svg {
    width: ${({ theme, size }) =>
      getConfig(theme, "button", "fontSize", size)}px;
    height: ${({ theme, size }) =>
      getConfig(theme, "button", "fontSize", size)}px;
  }
`;

export const Button = styled(
  ({ iconLeft, iconRight, ...props }: ButtonProps) => (
    <button {...props}>
      {iconLeft && <IconWrapper size={props.size}>{iconLeft}</IconWrapper>}
      {props.children}
      {iconRight && <IconWrapper size={props.size}>{iconRight}</IconWrapper>}
    </button>
  )
)`
  display: inline-flex;
  align-items: center;
  min-width: fit-content;

  ${({ theme, size }) => `
    font-family: ${getConfig(theme, "button", "fontFamily")};
    font-weight: ${getConfig(theme, "button", "fontWeight")};
    font-size: ${getConfig(theme, "button", "fontSize", size)}px;
    line-height: 1;
  `}

  ${({ fluid }) => fluid && `width: 100%;`}

  ${({ theme, size }) =>
    verticalPadding(getConfig(theme, "button", "spacing", "vertical")[size])}

  ${({ theme, size }) =>
    horizontalPadding(
      getConfig(theme, "button", "spacing", "horizontal")[size]
    )};

  ${({ theme, size }, radius = getConfig(theme, "button", "radius")) =>
    radius ? borderRadius(radius[size]) : ""}
  
  ${({ theme, variant }, border = getConfig(theme, "button", "border")) =>
    variant ? `border: ${border[variant]};` : ""}

  ${({ theme, variant }) =>
    `color: ${getConfig(theme, "button", "text", variant)};`}
  
  ${({ theme, variant }) =>
    `background-color: ${getConfig(theme, "button", "background", variant)};`}

  :focus,:hover{
    ${({ theme, variant }) =>
      `background-color: ${transparentize(
        0.1,
        getConfig(theme, "button", "background", variant)
      )}`}
  }

  :active {
    ${({ theme, variant }) =>
      `background-color: ${transparentize(
        0.05,
        getConfig(theme, "button", "background", variant)
      )}`}
  }

  user-select: none;

`;
