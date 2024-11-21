import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // This tells Vite to treat `.jsx` files as JSX
    include: /src\/.*\.jsx$/, // Ensures that only `.jsx` files in `src` are processed
  },
  resolve: {
    alias: {
      '~react-image-gallery': path.resolve(__dirname, 'node_modules/react-image-gallery'),
    },
  },
});
