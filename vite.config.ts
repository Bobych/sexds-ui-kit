import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dtsPlugin from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
      react(),
      dtsPlugin({
        insertTypesEntry: true,
        include: ['src'],
        exclude: ['src/**/*.stories.tsx']
      }),
  ],
  server: {
    port: 3333
  },
  build: {
    outDir: 'out',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'sexds/ui-kit',
      fileName: (format) => `sexds-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
