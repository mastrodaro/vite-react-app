import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "bundle-visualizer.html",
    }) as PluginOption,
    svgr({
      exportAsDefault: true,
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src/") },
  },
});
