import React from "react";
import styled, { Sizes, Variants } from "styled-components";
import { transparentize } from "polished";
import { getConfig } from "../util/getConfig";
import {
  borderRadius,
  horizontalPadding,
  verticalPadding,
} from "../util/style";
import { parseColor } from "../util/color";

// type ThemeButton = DefaultTheme['button'];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants[number];
  size: Sizes[number];
  children: React.ReactNode;


  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fluid?: boolean;
}

// const ignoredPropsToDom: Array<keyof ButtonProps> = [
//   "fluid",
//   "size",
//   "variant",
//   "iconLeft",
//   "iconRight",
// ];

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
    horizontalPadding(getConfig(theme, "button", "spacing", "horizontal")[size])};

  ${({ theme, size }, radius = getConfig(theme, "button", "radius")) =>
    radius ? borderRadius(radius[size]) : ""}
  
  ${({ theme, variant }, border = getConfig(theme, "button", "border")) =>
    variant ? `border: ${border[variant]};` : ""}

  ${({ theme, variant }, value = getConfig(theme, "button", "text", variant)) =>
    `color: ${parseColor(theme, value)};`}
  
  ${({ theme, variant }, value = getConfig(theme, "button", "background", variant)) =>
    `background-color: ${parseColor(theme, value)};`}

  :focus,:hover{
    ${({ theme, variant }, value = getConfig(theme, "button", "background", variant)) =>
    `background-color: ${transparentize(0.1, parseColor(theme, value))}`}
  }

  :active {
    ${({ theme, variant }, value = getConfig(theme, "button", "background", variant)) =>
    `background-color: ${transparentize(0.05, parseColor(theme, value))}`}
  }

  user-select: none;
`;

