import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Replace with your actual repository name
  base: "/getexpensa",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    outDir: "dist",
    // Add this to change how scripts are generated
    rollupOptions: {
      output: {
        // This ensures scripts use .js extension which GitHub Pages handles better
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
});