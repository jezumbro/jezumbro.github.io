import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**@type {import('vite').UserConfig} */
const userConfig = {
  plugins: [react()],
  build: { outDir: 'build' },
  server: {
    port: 3000,
  },
}
export default defineConfig(userConfig)
