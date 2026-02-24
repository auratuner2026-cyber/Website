import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html',
        support: 'support.html',
        tos: 'tos.html',
        404: '404.html',
      }
    }
  }
})
