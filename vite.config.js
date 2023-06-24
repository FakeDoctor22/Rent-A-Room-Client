import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Rent-A-Room-Client",
  plugins: [react()],
  server: {
    proxy: "https://rent-a-room-app.onrender.com/", 
  },
});
