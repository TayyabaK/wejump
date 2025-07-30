// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
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
      paper: '#391e6bff',
    },
    text: {
      primary: '#ffffff',
    },
  },
  ...commonSettings,
});
