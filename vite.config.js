var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig({
    base: CONFIG.base || '/',
    plugins: __spreadArray([
        react(),
        createHtmlPlugin({
            inject: {
                data: {
                    metaTitle: CONFIG.seo.title,
                    metaDescription: CONFIG.seo.description,
                    metaImageURL: CONFIG.seo.imageURL,
                },
            },
        })
    ], (CONFIG.enablePWA
        ? [
            VitePWA({
                registerType: 'autoUpdate',
                workbox: {
                    navigateFallback: undefined,
                },
                includeAssets: ['logo.png'],
                manifest: {
                    name: 'Portfolio',
                    short_name: 'Portfolio',
                    description: 'Personal Portfolio',
                    icons: [
                        {
                            src: 'logo.png',
                            sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                            type: 'image/png',
                        },
                    ],
                },
            }),
        ]
        : []), true),
    define: {
        CONFIG: CONFIG,
    },
});
