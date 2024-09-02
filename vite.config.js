import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('laravue-lib')
      }
    }
  })],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ce.js'),
      name: "laravue-lib",
      fileName: "laravue-lib",
    },
  },
  define: {
    'process.env': false
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  }
});
