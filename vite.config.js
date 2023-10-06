
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig( {
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                TD1: resolve(__dirname, 'pages/TD1/index.html'),
                TD2: resolve(__dirname, 'pages/TD2/index.html'),
                TD3: resolve(__dirname, 'pages/TD3/index.html')
            }
        }
    }
})