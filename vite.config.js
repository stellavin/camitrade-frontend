import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxRuntime: 'classic'
    }),
    {
      name: 'suppress-sourcemap-warnings',
      configureServer() {
        // Suppress sourcemap warnings for node_modules during dev
        const originalWarn = console.warn;
        console.warn = (...args) => {
          const message = args[0]?.toString() || '';
          if (message.includes('Sourcemap') && message.includes('points to missing source files')) {
            return; // Suppress Bootstrap sourcemap warnings
          }
          originalWarn.apply(console, args);
        };
      }
    }
  ],
  css: {
    devSourcemap: true
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
