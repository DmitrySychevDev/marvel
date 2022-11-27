import React, { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Theme } from "@mui/system";

// Components
import { MainFrame } from "frame";
import { ThemeContext } from "components";

const App: React.FC = () => {
  const curentTheme: Theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={curentTheme}>
      <CssBaseline />
      <MainFrame />
    </ThemeProvider>
  );
};

export default App;
