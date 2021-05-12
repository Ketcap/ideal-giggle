import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { generateTheme } from '../src/theme/generator';
import { theme } from '../stories/theme';

const customTheme = generateTheme(theme);

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [customTheme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,

    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
