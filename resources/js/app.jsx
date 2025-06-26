// Import file bootstrap standar Laravel (untuk axios, dll.)
import './bootstrap';

// Import library yang dibutuhkan untuk merender React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import komponen App utama Anda dari folder src
import App from './src/App';

// Import CSS global Anda (jika ada)
import './src/index.css'; 

// Cari div dengan id="app" di file app.blade.php
const rootElement = document.getElementById('app');

// Render komponen App Anda di dalam div tersebut
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}