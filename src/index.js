import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { LangProvider } from './store/langContext';
import { InterfaceProvider } from './store/interfaceContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <InterfaceProvider>
      <Router>
        <App />
      </Router>
    </InterfaceProvider>
  </LangProvider>
);
