import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Componerts
import App from "App";
import { ThemeManager } from "components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeManager>
        <App />
      </ThemeManager>
    </Router>
  </React.StrictMode>
);
