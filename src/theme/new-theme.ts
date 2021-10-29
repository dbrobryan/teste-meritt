import { ThemeOptions, unstable_createMuiStrictModeTheme} from '@mui/material';

export const fontFamily = [
  '"Roboto"',
  'sans-serif',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(', ');

const background = '#F2F2F2';

export const theme: ThemeOptions = unstable_createMuiStrictModeTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'normal',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        * {
          -webkit-font-smoothing: antialiased !important;
          -webkit-tap-highlight-color: transparent;
        }
        body {
          backgroundColor: ${background} !important;
          overflow-x: hidden;
          overflow-y: auto;
          margin: 0,
          font-family,
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        code {
          font-family:
            "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";
        }
        .SnackbarItem-variantSuccess {
          background-color: #FA558F !important;
          color: #fff !important;
        }
      `,
    },
  },
  palette: {
    background: {
      default: background,
    },
    primary: {
      main: '#FA558F',
    },
    secondary: {
      dark: '#C95100',
      main: '#FF6600',
      light: '#FFB380',
      contrastText: '#FFE9DB',
    },
    error: {
      dark: '#D40728',
      main: '#FF4D6A',
      light: '#FFBDC8',
      contrastText: '#FFF8E3',
    },
    warning: {
      dark: '#916B00',
      main: '#FFC938',
      light: '#FFE7A7',
      contrastText: '#DEFAF3',
    },
    info: {
      main: '#5653FF',
    },
    success: {
      dark: '#008262',
      main: '#28D2A7',
      light: '#A6EDDB',
      contrastText: '#DEFAF3',
    },
    grey: {
      '50': '#FAFAFB',
      '100': '#F0F1F2',
      '200': '#E5E7EB',
      '300': '#CFD2D9',
      '400': '#ABB0BA',
      '500': '#727780',
      '600': '#4A4F58',
      '700': '#262930',
    },
    text: {
      primary: '#262930',
      secondary: '#4A4F58',
      disabled: '#ABB0BA',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
    },
  },
});