import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "portal.gym.local", // Listens on all network interfaces
    port: 3000, // Port to run the server on
    open: true, // Automatically open the browser
  },
  /**base: "/metronic8/vue/demo1/", */
  base: "/", 
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
