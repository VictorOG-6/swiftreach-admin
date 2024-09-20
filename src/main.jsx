import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cVGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjUX5acXRWQWBbUEZwWA==');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
