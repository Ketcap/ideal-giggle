import React, { useState } from "react";
import styled, { css, Sizes } from 'styled-components';

import { getConfig } from "../util/getConfig";
import { horizontalPadding, verticalPadding } from "../util/style";

export interface InputProps
  extends
  React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  inputSize: Sizes[number];
  label: string;

  fluid?: boolean;
  isDisabled?: boolean;

  success?: InputSuccess;
  error?: InputError;
}

export interface InputSuccess {
  message: string;
}

export interface InputError {
  message: string;
}

const LabelFocusCss = css`
  transform: scale(.75) translateY(-175%);
`;

const Label = styled.label<{ hasValue?: boolean }>`
  display: inline-block;
  position: relative;

  top: 50%;
  transform: translateY(-50%);

  pointer-events: none;
  transform-origin: left top;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const InputWrapper = styled.div<Pick<InputProps, 'fluid'>>`
  position:relative;
  min-width: ${({ theme }) => getConfig(theme, 'input', 'minWidth') ?? 200}px;

  width: ${({ fluid }) => fluid && '100%'};
`;

const CommontNotchCss = css`
  border-width: ${({ theme }) => getConfig(theme, 'input', 'border', 'size')}px;
  pointer-events: none;
  box-sizing: border-box;
  border-style: solid;
`;

const NotchWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
  box-sizing: border-box;
`;

const NotchLeading = styled.div<Pick<InputProps, 'inputSize'>>`
  ${CommontNotchCss}

  width: ${({ theme, inputSize }) => getConfig(theme, "input", "spacing", 'horizontal')[inputSize]}px;
  border-color: ${({ theme }) => {
    const { border } = theme.input;
    if (typeof border === 'string') {
      return border;
    }
    return border.Default;
  }};

  border-right: 0;
  border-top-left-radius: ${({ theme, inputSize }) => getConfig(theme, 'input', 'radius')?.[inputSize]}px;
  border-bottom-left-radius: ${({ theme, inputSize }) => getConfig(theme, 'input', 'radius')?.[inputSize]}px;
`;

const LabelNotchWrapper = styled.div<Pick<InputProps, 'inputSize'>>`
  ${CommontNotchCss}

  flex: 0 0 auto;
  width: auto;
  border-color: ${({ theme }) => {
    const { border } = theme.input;
    if (typeof border === 'string') {
      return border;
    }
    return border.Default;
  }};
  border-left:0;
  border-right:0;
  ${({ theme, inputSize }, padding = getConfig(theme, "input", "spacing", 'horizontal')[inputSize]) => `max-width: calc(100% - ${padding}px * 2);`};
`;

const NotchTrailing = styled.div<Pick<InputProps, 'inputSize'>>`
  ${CommontNotchCss}

  border-color: ${({ theme }) => {
    const { border } = theme.input;
    return border.Default;
  }};
  border-left:0;
  flex-grow: 1;

  border-top-right-radius: ${({ theme, inputSize }) => getConfig(theme, 'input', 'radius')?.[inputSize]}px;
  border-bottom-right-radius: ${({ theme, inputSize }) => getConfig(theme, 'input', 'radius')?.[inputSize]}px;
`;


const InputBase = styled.input<Omit<InputProps, 'label'> & { hasValue?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-color: transparent;

  border-width: ${({ theme }) => getConfig(theme, 'input', 'border', 'size')}px;
  background-color: ${({ theme }) => getConfig(theme, 'input', 'background')};

  ${({ theme, inputSize }, spacing = getConfig(theme, 'input', 'spacing', 'vertical')[inputSize]) => verticalPadding(spacing)}
  ${({ theme, inputSize }, spacing = getConfig(theme, 'input', 'spacing', 'horizontal')[inputSize]) => horizontalPadding(spacing)}

  &:focus + div ${Label},
  &:placeholder-shown + div ${Label} {
   ${LabelFocusCss}
  }

  &:focus + div ${LabelNotchWrapper} {
    border-top: 0;
  }

  ${(props) => props.hasValue && `
    & + div ${LabelNotchWrapper} {
      border-top: 0;
    }

    & + div ${Label} {
      ${LabelFocusCss}
    }
  `}

  &,
  & + div ${Label} {
    font-size: ${({ theme }) => getConfig(theme, 'input', 'fontSize')}px;
    font-family: ${({ theme }) => getConfig(theme, 'input', 'fontFamily')}px;
    font-weight: ${({ theme }) => getConfig(theme, 'input', 'fontWeight')};
  }
`

export const Input = ({ fluid, id, label, value, ...props }: InputProps) => (
  <InputWrapper fluid={fluid}>
    <InputBase {...props} id={id} value={value} hasValue={!!value} />
    <NotchWrapper>
      <NotchLeading inputSize={props.inputSize} />
      <LabelNotchWrapper inputSize={props.inputSize}>
        <Label htmlFor={id}>
          {label}
        </Label>
      </LabelNotchWrapper>
      <NotchTrailing inputSize={props.inputSize} />
    </NotchWrapper>
  </InputWrapper>
)