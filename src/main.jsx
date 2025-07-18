import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { UserProvider } from './Context/Usercontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      
      <App />
    </UserProvider>
  </StrictMode>
);
