import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cian-api': {
        target: 'https://spb.cian.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace("/cian-api", ''),
      },
    },
  },
})
