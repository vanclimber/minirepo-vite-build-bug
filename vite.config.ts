import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
    jsx: true,
    })
  ],
  build: {
    lib: {
      entry: resolve('index.ts'),
      name: 'AnyUI',
      fileName: (format) => `any-ui.${format}.js`,
      formats: ['umd'],
    },
    cssCodeSplit:true
  }

})
