import styled from 'styled-components';

export const PaletteGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(10, 108px);
  grid-auto-rows: 108px;
  grid-gap: 8px;
`;

export const Palette = styled.div<{ backgroundColor: string; color: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme, color }) => theme.color[color as keyof typeof theme['color']] ?? 'white'};
`;