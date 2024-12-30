import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build
    minify: 'esbuild', // Changed from terser to esbuild for better compatibility
    sourcemap: false,
    // Simplified chunk strategy
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  // Remove optimizeDeps exclusion as it might cause issues
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
});