import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, 'src'),
            // eslint-disable-next-line no-undef
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            // eslint-disable-next-line no-undef
            '@components': path.resolve(__dirname, 'src', 'components'),
            // eslint-disable-next-line no-undef
            '@router': path.resolve(__dirname, 'src', 'router'),
            // eslint-disable-next-line no-undef
            '@contexts': path.resolve(__dirname, 'src', 'contexts'),
            // eslint-disable-next-line no-undef
            '@controllers': path.resolve(__dirname, 'src', 'contexts'),
            // eslint-disable-next-line no-undef
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            // eslint-disable-next-line no-undef
            '@reduxs': path.resolve(__dirname, 'src', 'reduxs'),
            // eslint-disable-next-line no-undef
            '@stores': path.resolve(__dirname, 'src', 'stores'),
            // eslint-disable-next-line no-undef
            '@style_component': path.resolve(__dirname, 'src', 'style_component'),

        },
    },
});
