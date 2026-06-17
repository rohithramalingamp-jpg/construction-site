import { defineConfig } from 'vite';
// Your exact plugin import name might differ, look for '@lovable.dev/vite-tanstack-config'
import { lovableTanstackConfig } from '@lovable.dev/vite-tanstack-config'; 

export default defineConfig({
  plugins: [
    // Add the nitro config here to force-enable it on Vercel
    lovableTanstackConfig({ 
      nitro: true 
    }),
    // ... any other plugins
  ],
});
