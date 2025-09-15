import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";
import tailwindcss from "@tailwindcss/vite"




export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths({ loose: true }), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as var;`,
      },
    },
  },
})
