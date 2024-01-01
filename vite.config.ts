import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,mp3}"],
      },
      manifest: {
        theme_color: "#ffffff",
        background_color: "#000A15",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Meternome",
        short_name: "Meternome",
        description: "online metronome app with advanced features",
        icons: [
          {
            src: "/manifast/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/manifast/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/manifast/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/manifast/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/manifast/screenshots/n.png",
            sizes: "720x960",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/manifast/screenshots/wide.png",
            sizes: "1080x920",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
