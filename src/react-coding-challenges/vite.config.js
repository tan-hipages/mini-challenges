import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isSolution = mode === 'solution';
  
  return {
    plugins: [react()],
    root: path.resolve(__dirname),
    publicDir: 'public',
    server: {
      open: true,
    },
    build: {
      outDir: 'dist',
    },
    define: {
      'process.env.SOLUTION': JSON.stringify(isSolution),
    },
  };
});
