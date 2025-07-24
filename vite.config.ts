import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 🚀 LIGHTHOUSE OPTIMIZATION: Otimizações críticas de performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
    },
    rollupOptions: {
      output: {
        // 🚀 LIGHTHOUSE: Code splitting otimizado para reduzir bundle inicial
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion'],
          utils: ['clsx', 'tailwind-merge'],
        },
        // 🚀 LIGHTHOUSE: Nomes de arquivo com hash para cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // 🚀 LIGHTHOUSE: Reduzir limite de chunk size warning
    chunkSizeWarningLimit: 300,
    
    // 🚀 LIGHTHOUSE: Otimizações de CSS
    cssCodeSplit: true,
    
    // 🚀 LIGHTHOUSE: Source maps otimizados para produção
    sourcemap: mode === 'development',
  },
  
  // 🚀 LIGHTHOUSE: Otimização de dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['@vite/client', '@vite/env'],
  },
  
  // 🚀 LIGHTHOUSE: Configurações experimentais para performance
  experimental: {
    renderBuiltUrl(filename: string) {
      return '/' + filename
    }
  },
}));
