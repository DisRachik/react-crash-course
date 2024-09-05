import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-crash-course/',
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
