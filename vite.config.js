
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        VitePWA({
            scope: '/',

            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                sourcemap: true,

                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            },
                        }
                    }
                ]
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^index.html$/]
            },

            manifest: {

                "name": "SolarSystem",
                "short_name": "SolarSystem",
                "description":"Learn about the sun, planets and many other celestial bodies in the Solar System.",
                "icons": [
                    {
                        "src": "/assets/icons/android-chrome-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/assets/icons/android-chrome-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                "theme_color": "#00a2ed",
                "background_color": "#000000",
                "orientation": "any",
                "display": "standalone",
                "related_applications": [],
                "prefer_related_applications": false,
                "display_override": ["window-controls-overlay"],
                "shortcuts": [
                    {
                        "name": "Contents",
                        "url": "/index.html/#contents",
                        "description": "Open the Contents section"
                    }
                ],
                "start_url": "/",
                "scope": "/",
                "categories": ["space", "solar system", "planets", "sun"]
            }
        })
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true,

    },
    devOptions: {
        enabled: true,
        type: "module"
    }
})
