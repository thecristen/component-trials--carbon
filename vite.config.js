import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "/component-trials--carbon/",
  build: {
    lib: {
      entry: 'index.html',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        /^lit-element/,
        'carbon-web-components',
        'carbon-components',
        'carbon-components/es/globals/js/settings'
      ]
    }
  }
})
