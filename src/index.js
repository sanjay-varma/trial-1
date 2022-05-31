import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comp2 from './comp-2';
import Comp3 from './comp-3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comp2 /><hr />
    <Comp3 />
  </React.StrictMode>
);

