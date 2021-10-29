import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/new-theme";
import { Routes } from "./router";
import { AppLayout } from "./layouts";
import {NotifyProvider} from './contexts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotifyProvider>
      <CssBaseline />
      <BrowserRouter>
        <AppLayout>
          <Routes />
        </AppLayout>
      </BrowserRouter>
      </NotifyProvider>
    </ThemeProvider>
  );
}

export default App;
