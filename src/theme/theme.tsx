// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Sora, sans-serif',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FDEA2E', // Yellow
      light: '#FFF176',
      dark: '#C7A500',
      contrastText: '#20194A', // For text/icons on yellow bg
    },
    secondary: {
      main: '#F40968', // Pink
      light: '#FF5B9E',
      dark: '#C30051',
      contrastText: '#ffffff', // For text/icons on pink bg
    },
    background: {
      default: '#ffffff',
      paper: '#FFFDF4',
    },
    text: {
      primary: '#20194A',
    },
    divider: '#424242', // Light gray for dividers
  },

  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FDEA2E',
      light: '#FFF176',
      dark: '#C7A500',
      contrastText: '#20194A',
    },
    secondary: {
      main: '#F40968',
      light: '#FF5B9E',
      dark: '#C30051',
      contrastText: '#ffffff',
    },
    background: {
      default: '#20194A',
      paper: '#6a4d9f',
    },
    text: {
      primary: '#ffffff',
    },
    divider: '#ffffff', // Dark gray for dividers
  },
  ...commonSettings,
});
