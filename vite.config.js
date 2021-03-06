import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/XX.github.io/',
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  }
})
