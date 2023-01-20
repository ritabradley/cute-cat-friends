import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import './index.css';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);