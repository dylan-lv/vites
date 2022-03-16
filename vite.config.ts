import path from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
// eslint-disable-next-line import/no-unresolved
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    AutoImport({
      imports: ["vue"],
      dts: true,
    }),
  ],
})
