/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  envDir: "./.env.local",
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts", 
  },
})