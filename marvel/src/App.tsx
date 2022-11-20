import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignToken } from "./themes/ThemeManager";
import { MainFrame } from "./frame";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={getDesignToken("light")}>
      <CssBaseline />
      <MainFrame />
    </ThemeProvider>
  );
};

export default App;
