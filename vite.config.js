import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('laravue-lib')
      }
    }
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ce.js'),
      name: "laravue-lib",
      fileName: "laravue-lib",
    },
    
    define: {
      'process.env': process.env
    },
  },
});
