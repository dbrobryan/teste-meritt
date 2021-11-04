import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/new-theme";
import { Routes } from "./router";
import { AppLayout } from "./layouts";
import {NotifyProvider} from './contexts';
import {ExamContextProvider} from './contexts/ExamContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotifyProvider>
      <CssBaseline />
      <ExamContextProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes />
        </AppLayout>
      </BrowserRouter>
      </ExamContextProvider>
      </NotifyProvider>
    </ThemeProvider>
  );
}

export default App;
