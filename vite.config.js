import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/greeting": {
        target: "http://10.60.201.123",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
