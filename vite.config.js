import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
    }),
    visualizer({ open: true, filename: "bundle-report.html" }),
  ],
  build: {},
});
