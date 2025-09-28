import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
        watch: {
            usePolling: true,
            interval: 300,
            ignored: ['**/node_modules/**', '**/.git/**'],
        },
})
