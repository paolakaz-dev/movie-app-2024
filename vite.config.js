import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./docs"
  },
  base: "https://paolakaz-dev.github.io/movie-app-2024/"
})
