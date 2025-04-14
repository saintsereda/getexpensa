import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/getexpensa/", // This will be replaced with your actual repo name
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    outDir: "dist",
  },
});