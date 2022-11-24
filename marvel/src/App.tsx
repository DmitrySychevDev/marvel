import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import { MainFrame } from "frame";

// Themes
import { getDesignToken } from "themes/ThemeManager";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={getDesignToken("dark")}>
      <CssBaseline />
      <MainFrame />
    </ThemeProvider>
  );
};

export default App;
