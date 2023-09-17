import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from '../src/theme'

const GlobalStyles = createGlobalStyle``;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    Provider: ThemeProvider,
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme
    }
  }),
];