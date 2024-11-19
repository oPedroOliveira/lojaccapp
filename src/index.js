import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import ClienteModify from './Components/Cliente/ClienteModify';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/cliente/novo/" element={ <ClienteModify /> } />
        <Route path="/cliente/alterar/:id" element={ <ClienteModify /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

