import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
    visualizer({
      filename: "bundle-visualizer.html",
    }) as PluginOption,
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src/") },
  },
});
