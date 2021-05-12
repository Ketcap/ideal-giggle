import React from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

export const Color = (): JSX.Element => {
  const theme = useTheme()

  return (
    <S.PaletteGrid>
      {
        Object.entries(theme.color).map(([key, value], index) => {
          const [name, variant] = key.split('.');
          const color = `${name}.${1000 - parseInt(variant, 10)}`
          return (
            <S.Palette backgroundColor={value} color={color}>
              {key}
            </S.Palette>
          )
        })
      }
    </S.PaletteGrid>
  )
}