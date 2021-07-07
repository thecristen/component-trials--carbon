import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "/component-trials--carbon/",
  build: {
    lib: {
      entry: 'src/my-element.js',
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
