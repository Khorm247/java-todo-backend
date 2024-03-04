import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      }
    }
  }
  // standard proxy setup
  // axios.get('/api/endpoint') will be proxied to http://localhost:8080/api/endpoint
})
