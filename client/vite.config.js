import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all interfaces
    port: 5173,
    watch: {
      usePolling: true, // force Docker to detect file changes
      interval: 100, // check every 100ms
    },
  },
});
