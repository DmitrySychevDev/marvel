import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { observer } from "mobx-react-lite";

// Components
import { MainFrame } from "frame";

// Store
import { themeStore } from "store";

const App: React.FC = observer(() => {
  return (
    <ThemeProvider theme={themeStore.theme}>
      <CssBaseline />
      <MainFrame />
    </ThemeProvider>
  );
});

export default App;
