import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'three-core': ['three'],
          'three-r3f': ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
