import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { apiMiddleware } from "./api-middleware";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Company-profile_Step/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'api-middleware',
      configureServer: apiMiddleware,
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
