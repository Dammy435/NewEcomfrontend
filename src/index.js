import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';

// ✅ Create root
const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Render App inside AuthProvider, wrapped in StrictMode
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// ✅ Optional performance monitoring
reportWebVitals();
