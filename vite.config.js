import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve('src/components/'),
      screens: resolve('src/screens/'),
      assets: resolve('src/assets/'),
    },
  },
});
