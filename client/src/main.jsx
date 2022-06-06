import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TrasactionProvider } from './context/TransactionContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TrasactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TrasactionProvider>
);
