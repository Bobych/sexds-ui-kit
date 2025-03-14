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
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['cjs'],
      fileName: (format) => `sexds-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime'
        }
      },
    },
  }
});
