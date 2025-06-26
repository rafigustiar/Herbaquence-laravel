import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Anda bisa pakai ini atau @vitejs/plugin-react-swc
import path from 'path'; // <-- PENTING: Tambahkan baris ini

export default defineConfig({
    plugins: [
        laravel({
            // Perubahan 1: Arahkan input ke file app.jsx
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    // Perubahan 2: Tambahkan blok 'resolve.alias'
    resolve: {
        alias: {
            // Ini akan membuat import '@/...' bekerja dengan benar
            '@': path.resolve(__dirname, 'resources/js/src'),
        },
    },
});