import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "/component-trials--carbon/",
  build: {
    lib: {
      name: "test",
      entry: 'index.html',
      formats: ["cjs"]
    },
    rollupOptions: {
      // external: [
      //   'carbon-components'
      // ],
      plugins: [
        nodeResolve()
      ]
    }
  }
})
