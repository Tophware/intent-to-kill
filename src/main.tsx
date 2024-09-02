import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router";
import App from "./App.tsx";
import GameContextProvider from "./GameContext.tsx";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <MemoryRouter>
          <GameContextProvider>
            <App />
          </GameContextProvider>
        </MemoryRouter>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
);
