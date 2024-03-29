import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/travel/",
  resolve: {
    alias: {
      components: resolve("src/components/"),
      screens: resolve("src/screens/"),
      assets: resolve("src/assets/"),
      content: resolve("src/content/"),
      context: resolve("src/context/"),
    },
  },
})
