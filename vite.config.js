import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from "path";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";

// https://vite.dev/config/
export default defineConfig({
  base: '/dexpay-landing/',
  plugins: [preact(), themePlugin()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
})
