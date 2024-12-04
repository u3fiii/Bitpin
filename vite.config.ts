import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.riv"],
  server: {
    proxy: {
      "/api": {
        target: "https://api.bitpin.org", // The base URL of the API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the /api prefix
      },
    },
  },
});
