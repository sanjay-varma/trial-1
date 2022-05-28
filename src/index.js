import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App color="red" />
    <App color="blue" />
    <App color="green" />
  </React.StrictMode>
);

