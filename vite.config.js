import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: fileURLToPath(new URL("./node_modules/react", import.meta.url)),
      "react-dom": fileURLToPath(new URL("./node_modules/react-dom", import.meta.url)),
      "react/jsx-runtime": fileURLToPath(new URL("./node_modules/react/jsx-runtime", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3002",
    },
  },
  
});