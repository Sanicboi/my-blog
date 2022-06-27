import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '^\/api\/[A-Za-z0-9\/]*': 'http://localhost'
    }
  }
})
