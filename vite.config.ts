import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { apiMiddlewarePlugin } from "./api-middleware";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? "/Company-profile_Step/" : "/",
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    apiMiddlewarePlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
}));
