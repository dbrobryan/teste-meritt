import { unstable_createMuiStrictModeTheme } from "@mui/material";

export const theme = unstable_createMuiStrictModeTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        '*' {
          -webkit-font-smoothing: antialiased !important;
          -webkit-tap-highlight-color: transparent;
          margin: 0;
          padding: 0;
        }
        html {
          @media screen and (min-width: 320px) and (max-width: 1000px) and (orientation: landscape) {
            transform: rotate(-90deg);
            transform-origin: left top;
            width: 100vh;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
        body {
          background-color: #f0f2f5 !important;
          margin: 0;
          padding: 0;
          font-family: "Roboto"; sans-serif !important";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-y: hidden;
        }
        code {
          font-family:
            source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace";
        }
        .switch-wrapper {
          position: relative;
        }
        .switch-wrapper > div {
          position: absolute;
        }`,
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#f0f2f5",
    },
    primary: {
      main: "#7229e6",
    },
    secondary: {
      main: "#595959",
    },
    error: {
      main: "#e02020",
    },
    success: {
      main: "#6dd400",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", sans-serif',
  },
});
