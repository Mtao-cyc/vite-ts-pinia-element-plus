import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    server: {
      port: 3000,
      open: false, 
      proxy: {
        '/api': {
          target: 'http://localhost:8086',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
  }
})
