import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Effect  from './Effect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     {/* <Effect/> */}
  </React.StrictMode>
);
