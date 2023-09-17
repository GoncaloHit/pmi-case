import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      plugins: [['@swc/plugin-styled-components', {
        'displayName': true,
        'ssr': true
      }]]
    })
  ],
  resolve: {
    alias: [
      { find: 'constant', replacement: resolve(__dirname, 'src/constant') },
      { find: 'pages', replacement: resolve(__dirname, 'src/pages') },
      { find: 'store', replacement: resolve(__dirname, 'src/store') },
      { find: 'theme', replacement: resolve(__dirname, 'src/theme') }
    ]
  }
})
