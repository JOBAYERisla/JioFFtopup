import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/JioFFtopup/' // GitHub Pages URL এর নাম (আপনার repo নাম)
})
