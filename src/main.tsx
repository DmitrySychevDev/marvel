import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Componerts
import App from 'App';

// translate
import 'translate/i18Instans';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
